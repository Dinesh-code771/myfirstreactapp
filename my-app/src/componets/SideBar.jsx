import React, { useContext } from "react";
import Context from "./Context";
export default function SideBar() {
  const { state, dispatch } = useContext(Context);
  // console.log(store, "state");
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
      <button onClick={()=>{
        dispatch({type: "INCREMENT"})
      }}>INCREMENT</button>
      <p>{state.count}</p>
    </div>
  );
}
