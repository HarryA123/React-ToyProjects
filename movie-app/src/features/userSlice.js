import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: [], isLogin: false },
  reducers: {
    registerUserInfo: (state, action) => {
      state.user = [];
      state.user.push(action.info);
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
