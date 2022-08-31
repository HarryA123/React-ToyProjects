// import { createStore, combineReducers} from 'redux'
// import ReduxThunk from 'redux-thunk';
import {configureStore , createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  clipped:[],
  unClipped:[],
  articles:[],
  searchHistory:[]
}

export const newsSlice = createSlice({
  name : 'newsSlice',
  initialState,
  reducers:{
    clip :(state)=>{
      console.log('clip되었음!')
      state.clipped = state.clipped.push()
    }
  }
})

const store = configureStore({
  reducer : {
    news: newsSlice.reducer
  }

})

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

