import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slices/counterSlice"
export default function Nav() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <nav>
      <ul>
        <li>Homcdvhe</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>

      <p>Count = {count}</p>
      <button
        onClick={() => {
          dispatch(increment(4));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      {/* <input
        type="text"
        value={props.searchValue}
        onChange={(e) => {
          props.onSearch(e.target.value);
        }}
        placeholder="Search"
      ></input> */}
    </nav>
  );
}
