import React from "react";
import { useDispatch } from "react-redux";
import { setIsFilterModelOpen } from "../../Redux/filterSlice";
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
        return (
          <SwiggyFilterPebble
            key={filter.name}
            name={filter.name}
            icon={filter.icon}
          />
        );
      })}
    </div>
  );
}

function SwiggyFilterPebble({ name, icon }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (name === "filter") {
          dispatch(setIsFilterModelOpen(true));
        }
      }}
      className="filterPebble "
    >
      <div className="filterName">{name}</div>
      <div className="filterIcon"></div>
    </div>
  );
}
