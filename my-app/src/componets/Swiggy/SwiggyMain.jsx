import React from "react";

import SwiggyDishItem from "./SwiggyDishItem";

export default function SwiggyMain({ text, data ,width, height}) {
  return (
    <div className="">
      <div className="mainHeader">
        <h2>{text}</h2>
        <div className="dishesWrapper">
          {data.map((item) => {
            return <SwiggyDishItem key={item.id} item={item} width={width} height={height} />;
          })}
        </div>
      </div>
    </div>
  );
}
