import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

interface AsyncProps {
  value: string;
  page: number;
}

export const getArticle = createAsyncThunk(
  "newsSlice/getArticle",
  async ({ value, page }:AsyncProps) => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${API_KEY}`
    );
    return response.data;
  }
);

interface NewsState {
  isLoading: boolean;
  clips: any[];
  articles: any[];
  searchHistory: string[];
}

const initialState: NewsState = {
  isLoading: false,
  clips: [],
  articles: [],
  searchHistory: [],
};

interface Action {
  type: string;
  payload?: any;
}

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    clip: (state: NewsState, action: Action) => {
      if (state.clips.some(item => item._id === action.payload._id)) {
        state.clips = state.clips.filter(
          item => item._id !== action.payload._id
        );
      } else {
        state.clips.push(action.payload);
      }
    },
    history: (state, action) => {
      if (state.searchHistory.length < 5) {
        state.searchHistory = state.searchHistory.filter(
          ele => ele !== action.payload
        );
        state.searchHistory.push(action.payload);
      } else {
        state.searchHistory = state.searchHistory.filter(
          ele => ele !== action.payload
        );
        state.searchHistory.push(action.payload);
      }
    },
    historyUpdate: (state, action) => {
      if (state.searchHistory.length < 5) {
        state.searchHistory.push(action.payload);
      } else {
        state.searchHistory.push(action.payload);
        state.searchHistory.shift();
      }
    },
    clearArticles: state => {
      state.articles = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getArticle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        payload.response.docs.map((ele: any) => state.articles.push(ele));
      })
      .addCase(getArticle.rejected, state => {
        state.isLoading = false;
      });
  },
});

const rootReducer = {
  reducer: newsSlice.reducer,
};

const store = configureStore(rootReducer);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
