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
    return INITIAL_STATE;
  } 

// addTodo: (state, action) => { 
//   const newTodo = {
//     id: Date.now(), title:action.payload.title, 
//     contents: action.payload.contents, complted:false,
//   }; state.push(newTodo);

const store = createStore(combineReducers({
  posting: postingReducer,
}))

export default store;