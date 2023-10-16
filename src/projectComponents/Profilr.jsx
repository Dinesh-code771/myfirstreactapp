import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Profilr() {
  const [
    products,
    setSelectedProduct,
    selectedProduct,
    changeCartStatus,
  ] = useOutletContext();
  //get the selected products from local storage
  React.useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedProduct"));
    if (selected) {
      setSelectedProduct(selected);
    }
  }, []);
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
            overflow: "scroll",
          }}
          className="detils"
        >
          {selectedProduct.length >  0 ? selectedProduct.map((product) => {
            return (
              <div>
                <img width={100} height={100} src={product.image} alt="" />
                <h1>{product.category}</h1>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
              </div>
            );
          }) : <h1>Cart is empty</h1>}
        </div>
        <button
          onClick={() => {
            setSelectedProduct([]);
            localStorage.removeItem("selectedProduct");
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}
