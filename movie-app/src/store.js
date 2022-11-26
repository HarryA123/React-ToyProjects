import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieSlice";

export const store = configureStore({
  reducer: movieSlice,
});
