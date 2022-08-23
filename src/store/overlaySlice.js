import { createSlice } from "@reduxjs/toolkit";

export const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    opened: false,
  },
  reducers: {
    toggle: (state) => {
      state.opened = !state.opened;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = overlaySlice.actions;

export default overlaySlice.reducer;
