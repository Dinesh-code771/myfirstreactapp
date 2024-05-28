import React from "react";

export default function SideBar() {
  return (
    <div className="sideBar">
      <h2>Side Bar</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
