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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Home />,
    loader: loader,
    children: [
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/home2",
        element: <Home2 />,
      }
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
