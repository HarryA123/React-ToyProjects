import { createStore, combineReducers } from "redux";

const INITIAL_STATE = [];

const postingReducer = (state, action) => {
  if (action.type === "POST_SUCCESS") {
    const newPost = {
      title: action.payload.title,
      content: action.payload.content,
    };
    return state.concat(newPost);
  } else if (action.type === "POST_DELETE") {
    return state.filter((item) => {
      return item.title !== action.payload;
    });
  } else if (action.type === "POST_EDIT_SUCCESS") {
    const modifiedPost = {
      title: action.payload.title,
      content: action.payload.content,
    };
    console.log(modifiedPost);
    return state
      .filter((_, index) => index.toString() !== action.payload.index)
      .concat([modifiedPost]);
  }
  return INITIAL_STATE;
};

const store = createStore(
  combineReducers({
    posting: postingReducer,
  })
);

export default store;
