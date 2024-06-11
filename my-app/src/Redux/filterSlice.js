import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterModelOpen: false,
  filters: [
    {
      name: "Sort",
      options: [
        "Relevance",
        "Rating",
        "Fastest Delivery",
        "Price: Low to High",
        "Price: High to Low",
      ],
      selectedOption: "Relevance",
    },
    {
      name: "Veg/Non-Veg",
      options: ["Veg", "Non-Veg"],
      selectedOption: "Veg",
    },
    {
      name: "Delivery Time",
      options: ["30 min", "45 min", "60 min"],
      selectedOption: "30 min",
    },
    {
      name: "Cost for two",
      options: ["Less than 200", "Rs.300-Rs.400", "Greater than 600"],
      selectedOption: "Less than 200",
    },
    {
      name: "Ratings",
      options: ["4.0+", "4.5+", "5.0"],
      selectedOption: ["4.0+"],
    },
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsFilterModelOpen: (state, action) => {
      state.isFilterModelOpen = action.payload;
    },
    setHandleChange: (state, action) => {
      state.filters = action.payload;
    },
    setHandleClearFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setIsFilterModelOpen, setHandleChange, setHandleClearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
