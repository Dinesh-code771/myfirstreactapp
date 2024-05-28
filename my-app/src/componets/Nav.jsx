import React, { useContext } from "react";
import { useState } from "react";
import Context from "./Context";
export default function Nav(props) {
  let name = "header"; //declaration
  const values = useContext(Context);
  function returnName() {
    let age = 34;
    if (props.name) {
      name = props.name;
    }
    return age;
  }
  returnName(); // expresion
  return (
    <nav className="navBar">
      {name}
      <p>{returnName()}</p>
      <ul>
        <li>
          <a style={{ color: "white" }} href="/">
            Home
          </a>
        </li>
        <li>
          <a style={{ color: "white" }} href="/about">
            About
          </a>
        </li>
        <li>
          <a style={{ color: "white" }} href="/contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="cart">
        <span>{values.selectedUsers.length}</span>
        {/* <i className="fas fa-shopping-cart"></i> */}
      </div>

      {props.children}
    </nav>
  );
}
