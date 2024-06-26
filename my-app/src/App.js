import Cards from "./componets/Cards";
import Nav from "./componets/Nav";
import SideBar from "./componets/SideBar";
import { useReducer, useState } from "react";
import Greetings from "./componets/Greetings";
import "./App.css";
import ContextProvider from "./componets/ContextProvider";
import { Outlet, createBrowserRouter } from "react-router-dom";

import { store } from "./Redux/store";
import { Provider } from "react-redux";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  return (

      <div className="App">
        <Nav />

        <div className="flex">
          <SideBar />
          {/* <Cards /> */}
          <Outlet />
          {/* <h1>Contact page</h1> */}
        </div>
        <Greetings />
      </div>

  );
}

export default App;
