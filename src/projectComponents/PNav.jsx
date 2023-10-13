import React from "react";

export default function PNav({ products, setFilteredProducts,selectedProduct,setSelectedProduct }) {
  
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px 15px 20px 15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
      <div>
        <div style={{}} className="search">
          <input
            style={{
              padding: "10px",
              border: "2px solid black",
              borderRadius: "5px",
              width: "200px",
            }}
            onChange={(e) => {
              const value = e.target.value;
              const newProducts = products.filter((product) => {
                return product.title.includes(value);
              });
              setFilteredProducts(newProducts);
            }}
            type="text"
            placeholder="Search Products..."
          />
        </div>
      </div>
      <div>
        <div
          style={{ border: "1px solid black", width: "20px" }}
          className="cart "
        >
          <img src="" alt="" />
          <div style={{}} className="numberOfitems">
            {selectedProduct.length}
          </div>
        </div>
      </div>
    </div>
  );
}
