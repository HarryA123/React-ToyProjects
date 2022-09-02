// import { createStore, combineReducers} from 'redux'
// import ReduxThunk from 'redux-thunk';
import {configureStore , createSlice, applyMiddleware, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

export const getArticle = createAsyncThunk('newsSlice/getArticle', async ({value, page})=>{
    console.log('내 검색 : ',value, '& 페이지 : ',page)
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`);
    console.log('api가 여기까지 호출됐어요!',response.data.response.docs)
    return response.data.response.docs
  }
)

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

export default store

