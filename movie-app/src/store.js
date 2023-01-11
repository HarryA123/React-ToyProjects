import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: { movie: movieSlice.reducer, user: userSlice.reducer },
});
