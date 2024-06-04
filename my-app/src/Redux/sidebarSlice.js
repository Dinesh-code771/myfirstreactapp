import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "RAJAT",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = sidebarSlice.actions;

export default sidebarSlice.reducer;
