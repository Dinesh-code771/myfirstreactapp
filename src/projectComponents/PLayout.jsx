import React from "react";
import PNav from "./PNav";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import data from "./data";
// export const useOutletContext = React.createContext();
export default function PLayout(props) {
  const [products, setProducts] = React.useState(data);
  const [filteredProducts, setFilteredProducts] = React.useState(data);
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  return (
    <div
      style={{
        border: "5px solid black",
        padding: "10px",
        height: "100vh",
        margin: "0 10px 0 10px",
      }}
    >
      <PNav
        products={products}
        setFilteredProducts={setFilteredProducts}
        selectedProduct={selectedProduct}
      />
      <Outlet
        context={[filteredProducts, setSelectedProduct, selectedProduct]}
      />
      ;{/* <Outlet products={products} /> */}
    </div>
  );
}
