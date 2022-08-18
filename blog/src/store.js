import { createStore, combineReducers, applyMiddleware } from "redux";

const INITIAL_STATE ={
  title: '',
  content: '',
}

const postingReducer =(state=INITIAL_STATE, action)=>{
  switch(action.type){
    case 'POST' :
      return {
        ...state,
        title: action.payload,
      }
    default :
      return state;
  } 
}


const store = createStore(combineReducers({
  posting: postingReducer,
}))

export default store;