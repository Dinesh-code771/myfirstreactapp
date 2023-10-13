import React from "react";

export default function PProductDetails() {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        width: "100%",
      }}
    >
      <div
        style={{
         
          height: "100%",
          width: "80%",
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "60%",
            width: "20%",
          }}
          className="left"
        ></div>

        <div style={{
          border: "1px solid black",
          height: "60%",
          width: "80%",
        }} className="right"></div>
      </div>
    </div>
  );
}
