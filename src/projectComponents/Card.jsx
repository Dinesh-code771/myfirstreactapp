import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({
  product,
  selectedProduct,
  setSelectedProduct,
  changeCartStatus,
}) {
  const Navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        height: "300px",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "space-between",
        overflow: "scroll",
      }}
      onClick={() => Navigate(`/product/${product.id}`)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="image"
      >
        <div style={{}} className="img">
          <img
            width={"50px"}
            height={"50px"}
            style={{
              // overflow: "hidden",
              borderRadius: "50%",
            }}
            src={product.image}
            alt=""
          />
        </div>
        <div className="cost">
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {product.price}
          </span>
        </div>
      </div>

      <div style={{}} className="details">
        <h1
          style={{
            fontSize: "20px",
          }}
        >
          {product.title}
        </h1>
        <p>{product.description}</p>
      </div>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          // removing form cart
          if (product.isAddedToCart) {
            changeCartStatus(product.id);
            return setSelectedProduct(
              selectedProduct.filter((p) => p.id !== product.id)
            );
          }

          // adding to cart
          changeCartStatus(product.id);

          setSelectedProduct([...selectedProduct, product]);
        }}
      >
        {product.isAddedToCart ? "remove form cart" : "Add to cart"}
      </button>
    </div>
  );
}
