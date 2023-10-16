import React from "react";

export default function Sidebar({ filteredCategory, setFilteredCategory }) {
  const items = [
    "ALL",
    "mens-clothing",
    "jewelery",
    "electronics",
    "womens-clothing",
  ];
  return (
    <div
      style={{
        width: "20%",
        border: "1px solid black",
        padding: "30px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        className="items"
      >
        {items.map((item) => {
          return (
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                width: "100%",
                
                textAlign: "center",
                boxShadow: "2px 2px 2px 2px gray",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor:
                  filteredCategory === item ? "lightblue" : "white",
              }}
              onClick={() => {
                setFilteredCategory(item);
              }}
              key={item}
              className="item"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
