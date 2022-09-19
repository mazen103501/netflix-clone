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
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, makeItAllowed } = userSlice.actions;

export default userSlice.reducer;
