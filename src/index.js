import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Home2 from "./Home2";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./ErrorPage";
import { loader } from "./Loading";
import ProductDetails from "./ProductDetails";
import Register from "./Register";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoListing from "./TodoListing";
import TodoDetails from "./TodoDetails";
import Phome from "./projectComponents/Phome";
import PLayout from "./projectComponents/PLayout";
import Profilr from "./projectComponents/Profilr";
import PProductDetails from "./projectComponents/PProductDetails";
import UHome from "./userManagement/UHome";
import ULogin from "./userManagement/ULogin";
import UProfile from "./userManagement/UProfile";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <UHome />,
  },
  {
    path: "/login",
    element: <ULogin />,
  },
  {
    path: "/user:id",
    element: <UProfile />,
  },
]);
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
