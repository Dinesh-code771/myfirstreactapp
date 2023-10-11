import React from "react";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const  {name} = useParams();
  console.log(name);
  return <div>
    <h1>TodoDetails - {name}</h1>
  </div>;
}
