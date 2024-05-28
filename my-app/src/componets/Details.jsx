import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const param = useParams();
  console.log(param, "param");
  return (
    <div>
      <h1>Hello {param.name}</h1>
    </div>
  );
}
