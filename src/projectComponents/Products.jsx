import React, { useEffect } from "react";
import Card from "./Card";
import data from "./data";
import { useOutlet } from "react-router-dom";
export default function Products({products, setSelectedProduct,selectedProduct}) {


  return (
    <div
      style={{
        width: "80%",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          padding: "40px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          overflow: "auto",
          height: "100%",
        }}
        className="cards     "
      >
        {products?.map((product) => {
          return <Card key={product.id} product={product} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>;
        })}
      </div>
    </div>
  );
}
