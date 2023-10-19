import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import sideBarReducer from "./slices/silebarSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        sideBar: sideBarReducer,
    },
});