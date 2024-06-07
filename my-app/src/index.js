import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cards from "./componets/Cards";
import reportWebVitals from "./reportWebVitals";
import About from "./componets/About";
import Error from "./componets/Error";
import Forms from "./componets/Forms";
import Login from "./componets/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./componets/Details";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import SwiggyHome from "./componets/Swiggy/SwiggyHome";
import SwiggyMain from "./componets/Swiggy/SwiggyMain";
import SwiggySerach from "./componets/Swiggy/SwiggySerach";
import SwiggyHelp from "./componets/Swiggy/SwiggyHelp";
import SwiggyOffer from "./componets/Swiggy/SwiggyOffer";
import dishes from "./componets/Swiggy/SwiggyData";
import SwiggyMainSection from "./componets/Swiggy/SwiggyMainSection";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SwiggyHome />,
    children: [
      {
        path: "/",
        element: <SwiggyMainSection />,
      },
      {
        path: "/search",
        element: <SwiggySerach />,
      },
      {
        path: "/help",
        element: <SwiggyHelp />,
      },
      {
        path: "/offers",
        element: <SwiggyOffer />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

reportWebVitals();
