import { createStore, combineReducers } from "redux";

const INITIAL_STATE = []

const postingReducer =(state , action)=>{
  if(action.type === 'POST_SUCCESS'){
    const newPost = {
      title:action.payload.title,
      content:action.payload.content
    };
    return state.concat(newPost)
  } 
  else if(action.type === 'DELETE_BTN'){
    return state.filter(item=> {
      return item.title !== action.payload})
  }
    return INITIAL_STATE;
  } 

const store = createStore(combineReducers({
  posting: postingReducer,
}))

export default store;