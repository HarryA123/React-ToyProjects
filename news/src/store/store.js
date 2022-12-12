import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getArticle = createAsyncThunk(
  "newsSlice/getArticle",
  async ({ value, page }) => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  }
);

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    isLoading: false,
    clips: [],
    articles: [],
    searchHistory: [],
  },
  reducers: {
    clip: (state, action) => {
      console.log("action.payload는 객체를 가져옴.", action.payload);
      if (state.clips.some(item => item._id === action.payload._id)) {
        console.log("뺌");
        state.clips = state.clips.filter(
          item => item._id !== action.payload._id
        );
      } else {
        state.clips.push(action.payload);
        console.log("넣었음!");
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
  extraReducers: {
    [getArticle.pending]: state => {
      state.isLoading = true;
    },
    [getArticle.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log("payload는 이거!", payload);
      payload.response.docs.map(ele => state.articles.push(ele));
    },
    [getArticle.rejected]: state => {
      state.isLoading = false;
    },
  },
});

const rootReducer = {
  reducer: newsSlice.reducer,
};

const store = configureStore(rootReducer);

export default store;