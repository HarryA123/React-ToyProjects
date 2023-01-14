import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: [], isLogin: false, userEmail: "" },
  reducers: {
    registerUser: (state, action) => {
      if (state.user.length === 0) {
        state.user.push(action.info);
        state.userEmail = action.info.email;
      } else {
        state.user = [];
        state.user.push(action.info);
        state.userEmail = action.info.email;
      }
    },
    loginState: (state, action) => {
      if (action.isLogin === true) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
});

export default userSlice;
export const { signup } = userSlice.actions;
