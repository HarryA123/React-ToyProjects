// import { createStore, combineReducers} from 'redux'
// import ReduxThunk from 'redux-thunk';
import {
  configureStore,
  createSlice,
  applyMiddleware,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getArticle = createAsyncThunk(
  "newsSlice/getArticle",
  async ({ value, page }) => {
    console.log("내 검색 : ", value, "& 페이지 : ", page);
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(
      "api가 여기까지 호출됐어요!",
      response.data,
      response.data.response.docs
    );
    return response.data;
  }
);

// export const api = async (value, page) => {
//   try {
//     console.log('value: ',value, '& page: ',page)
//     const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`);
//     console.log(response.data.response.docs);
//     return response.data.response.docs;
//   } catch (e) {
//     console.log(e);
//   }
// };

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
      if (state.clips.some((item) => item._id === action.payload._id)) {
        console.log("뺌");
        state.clips = state.clips.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.clips.push(action.payload);
        console.log("넣었음!");
      }
    },
    // 이미 있는 키워드를 받은 상황에서 전체 history가 5개 미만이면 그대로 push/ 그 이상 초과하면 마지막을 없애고, 새로운 keyword 그대로 push.
    history: (state, action) => {
      if (state.searchHistory.length < 5) {
        state.searchHistory = state.searchHistory.filter(
          (ele) => ele !== action.payload
        );
        state.searchHistory.push(action.payload);
      } else {
        state.searchHistory = state.searchHistory.filter(
          (ele) => ele !== action.payload
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
    clearArticles: (state) => {
      state.articles = [];
    },
  },
  extraReducers: {
    [getArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [getArticle.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log("payload는 이거!", payload);
      payload.response.docs.map((ele) => state.articles.push(ele));
    },
    [getArticle.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
  applyMiddleware,
});

// const api = async (searchKeyword) => {
//   setLoading(true);
//   try {
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=${searchKeyword}&apiKey=${process.env.REACT_APP_API_KEY}`
//     );
//     // console.log(response)
//     console.log(response.data.articles);
//     setArticles(response.data.articles);
//   } catch (e) {
//     console.log(e);
//   }
//   setLoading(false);
// };

export default store;
