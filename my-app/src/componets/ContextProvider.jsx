import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Context from "./Context";
import { useReducer } from "react";
import { initialState, reducer } from "./Store";
export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
