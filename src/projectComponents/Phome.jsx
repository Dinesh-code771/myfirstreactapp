import React from "react";
import PLayout from "./PLayout";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useOutlet } from "react-router-dom";
// import { useOutletContext } from "./PLayout";
import { useOutletContext } from "react-router-dom";

export default function Phome() {
  const [products,setSelectedProduct,selectedProduct] = useOutletContext();
 
  // console.log(data);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        height: "90%",
        display: "flex",
        gap: "15px",
        padding: "20px 15px",
      }}
    >
      <Sidebar />
      <Products products={products} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
    </div>
  );
}
