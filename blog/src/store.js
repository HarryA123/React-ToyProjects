import { createStore, combineReducers, applyMiddleware } from "redux";

const INITIAL_STATE ={
  title: [],
  content: [],
}

const postingReducer =(state=INITIAL_STATE, action)=>{
  switch(action.type){
    case 'POST_SUCCESS' :
      return {
        ...state,
        title: state.title.concat(action.payload.title),
        content: state.content.concat(action.payload.content),
      }
    default :
      return state;
  } 
}


const store = createStore(combineReducers({
  posting: postingReducer,
}))

export default store;