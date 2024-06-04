import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import sideBarSlice from "./sidebarSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    sideBar: sideBarSlice,
  },
});
