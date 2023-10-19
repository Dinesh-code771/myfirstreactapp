import React from "react";
import { MyContext } from "./App";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Nav1() {
  // const value = useContext(MyContext);
  return (
    <div>
      Nav1
      <button
        onClick={() => {
         
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
         
        }}
      >
        --
      </button>
      <button
        onClick={() => {
         
        }}
      >
        reset
      </button>
      <Link to="/about">go to about</Link>
    </div>
  );
}
