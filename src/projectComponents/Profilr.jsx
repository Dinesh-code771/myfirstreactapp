import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

export default function Profilr() {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0 ",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "30%",
          display: "flex",
          padding: "20px 15px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="details"
      >
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
          className="circle"
        ></div>
        <div
          style={{
            border: "1px solid black",
            width: "100%",
            height: "70%",
          }}
          className="detils"
        ></div>
      </div>
    </div>
  );
}
