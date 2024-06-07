import React from "react";

export default function SwiggyFilter() {
  let filters = [
    {
      name: "filter",
      icon: "star",
    },
    {
      name: "Sort By",
      icon: "rupee",
    },
    {
      name: "Fast Delivary",
      icon: "cuisine",
    },
    {
      name: "Rating",
      icon: "filter",
    },
    {
      name: "Offers",
      icon: "offer",
    },
    {
      name: "Pure Veg",
      icon: "more",
    },
  ];
  return (
    <div className="filterWrapper">
      {filters.map((filter) => {
        return <SwiggyFilterPebble key={filter.name} name={filter.name} icon={filter.icon} />;
      })}
    </div>
  );
}

function SwiggyFilterPebble({name, icon}) {
  return (
    <div className="filterPebble ">
      <div className="filterName">{name}</div>
      <div className="filterIcon"></div>
    </div>
  );
}
