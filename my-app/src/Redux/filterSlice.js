import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterModelOpen: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsFilterModelOpen: (state, action) => {
      state.isFilterModelOpen = action.payload;
    },
  },
});

export const { setIsFilterModelOpen } = filterSlice.actions;

export default filterSlice.reducer;
