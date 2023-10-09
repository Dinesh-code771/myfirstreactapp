import React from "react";
import { MyContext } from "./App";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Nav1() {
  const value = useContext(MyContext);
  return (
    <div>
      Nav1
      <button
        onClick={() => {
          value.dispatch({ type: "increment" });
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          value.dispatch({ type: "decrement" });
        }}
      >
        --
      </button>
      <button
        onClick={() => {
          value.dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <Link to="/about">go to about</Link>
    </div>
  );
}
