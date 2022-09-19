import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    allowed: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = null;
    },
    makeItAllowed: (state) => {
      state.allowed = true;
    },
    makeItNotAllowed: (state) => {
      state.allowed = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, makeItAllowed, makeItNotAllowed } =
  userSlice.actions;

export default userSlice.reducer;
