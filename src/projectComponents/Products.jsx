import React, { useEffect } from "react";
import Card from "./Card";
import data from "./data";
import { useOutlet } from "react-router-dom";
export default function Products({
  products,
  setSelectedProduct,
  selectedProduct,
  filteredCategory,
  changeCartStatus,
}) {
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
        {products
          .filter((product) => {
            switch (filteredCategory) {
              case "ALL":
                return product;

              case "mens-clothing":
                return product.category === "men's clothing";

              case "womens-clothing":
                return product.category === "women's clothing";

              case "electronics":
                return product.category === "electronics";

              case "jewelery":
                return product.category === "jewelery";

              default:
                return product;
            }
          })
          ?.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                changeCartStatus={changeCartStatus}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            );
          })}
      </div>
    </div>
  );
}
