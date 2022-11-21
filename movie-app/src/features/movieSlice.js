import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clips: [],
};

export const movieSlice = createSlice({
  name: "clip",
  initialState,
  reducers: {
    clip: (state, action) => {
      console.log(state, action);
      console.log(
        state.clips.some(item => {
          return item === action.title;
        })
      );
      if (
        state.clips.some(item => {
          return item === action.title;
        })
      ) {
        state.clips = state.clips.filter(item => item !== action.title);
        console.log("같아서 뺐음");
      } else {
        state.clips.push(action.title);
        console.log("💚넣었음!");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { clip } = movieSlice.actions;

export default movieSlice;
