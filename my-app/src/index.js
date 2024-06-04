import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cards from "./componets/Cards";
import reportWebVitals from "./reportWebVitals";
import About from "./componets/About";
import Error from "./componets/Error";
import Forms from "./componets/Forms";
// import { appRouter } from "./App";
import Login from "./componets/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./componets/Details";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <div>Contact page</div>,
      },
      {
        path: "/about/:name",
        element: <Details />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form",
    element: <Forms />,
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <div>Contact page</div>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
