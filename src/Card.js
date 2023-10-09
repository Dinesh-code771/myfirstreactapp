import React, { useContext } from "react";
import { MyContext } from "./App";

export default function Card() {
  const value = useContext(MyContext);
  console.log(value);
  return (
    <div>
      Card
      <p>Count = {value.state.count}</p>
    </div>
  );
}
