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
      setProducts(
        data.map((product) => ({ ...product, isAddedToCart: false }))
      );
      setFilteredProducts(data);
    }
    getProducts();
  }, []);

  // store selected products in local storage
  useEffect(() => {
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  }, [selectedProduct]);

  function changeCartStatus(id) {
    let updated = filteredProducts.map((product) => {
      if (product.id === id) {
        return { ...product, isAddedToCart: !product.isAddedToCart };
      }
      return product;
    });
    setFilteredProducts(updated); //this is for the products page
  }

  console.log(products, "products");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
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
        setSelectedProduct={setSelectedProduct}
      />
      <Outlet
        context={[
          filteredProducts,
          setSelectedProduct,
          selectedProduct,
          changeCartStatus,
        ]}
      />
      ;{/* <Outlet products={products} /> */}
    </div>
  );
}
