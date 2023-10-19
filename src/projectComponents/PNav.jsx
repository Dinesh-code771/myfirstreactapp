import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/counterSlice";
export default function PNav({
  products,
  setFilteredProducts,
  selectedProduct,
  setSelectedProduct,
}) {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
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
        <p>count {count}</p>
        <button
          onClick={() => {
            dispatch(increment(3));
          }}
        >
          ++
        </button>
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
