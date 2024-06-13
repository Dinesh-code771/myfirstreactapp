import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../Redux/counterSlice";
export default function SideBar() {
  const count = useSelector((state) => state.counter.value);
  const userName = useSelector((state) => state.sideBar.name);
  const dispatch = useDispatch();
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

      <h2>{count}</h2>
      <h2>{userName}</h2>
    </div>
  );
}
