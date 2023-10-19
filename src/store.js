import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import sideBarReducer from "./slices/silebarSlice";
import userDetailsReducer from "./slices/userDetails";
export default configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
});
