import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  clips: [],
};

export const movieSlice = createSlice({
  name: "clip",
  initialState,
  reducers: {
    clip: (state, action) => {
      if (state.clips.some(item => item.title === action.info.title)) {
        state.clips = state.clips.filter(
          item => item.title !== action.info.title
        );
        console.log("💦뺐음!");
      } else {
        state.clips.push(action.info);
      }
    },
  },
});

export const { clip } = movieSlice.actions;

export default movieSlice;
