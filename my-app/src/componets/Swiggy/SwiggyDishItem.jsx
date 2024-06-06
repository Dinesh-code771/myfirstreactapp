import React from "react";

export default function SwiggyDishItem({ item, width, height }) {
  return (
    <div className="dishes">
      <img src={item.dishImage} alt="dishes" width={width} height={height} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h4>{item.price}</h4>
    </div>
  );
}
