import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterModelOpen } from "../../Redux/filterSlice";
export default function SwiggFilterModel() {
  const isFilterOpen = useSelector((state) => state.filter.isFilterModelOpen);
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState(0);
  const filters = [
    {
      name: "Sort",
      options: [
        "Relevance",
        "Rating",
        "Fastest Delivery",
        "Price: Low to High",
        "Price: High to Low",
      ],
    },
    {
      name: "Veg/Non-Veg",
      options: ["Veg", "Non-Veg"],
    },
    {
      name: "Delivery Time",
      options: ["30 min", "45 min", "60 min"],
    },
    {
      name: "Cost for two",
      options: [" Less than 200", "Rs.300-Rs.400", "Greater than 600"],
    },
  ];
  return (
    <div
      onClick={() => {
        dispatch(setIsFilterModelOpen(false));
      }}
      className="filterModel"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="filter"
      >
        <div className="filterHeader">
          <h2>Filter</h2>
          <div
            className="filterClose"
            onClick={() => dispatch(setIsFilterModelOpen(false))}
          >
            X
          </div>
        </div>

        <div className="filterBody">
          <div className="filterBodyLeft">
            {filters.map((filter, index) => {
              return (
                <div
                  key={filter.name}
                  onClick={() => setCurrentState(index)}
                  className={`nameFilter `}
                >
                  <div
                    className={`activeState ${
                      currentState === index ? "active" : ""
                    }`}
                  ></div>
                  <span>{filter.name}</span>
                </div>
              );
            })}
          </div>
          <div className="filterBodyRight">
            {
              <div className="filterOptions">
                <span className="filterOptionName">
                  {filters[currentState].name.toUpperCase() + "BY"}
                </span>
                {filters[currentState].options.map((option) => {
                  return (
                    <div key={option} className="filterOption">
                      <input type="radio" />
                      <span className="optionName">{option}</span>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>

        <div className="filterFooter">
          <div className="end">
            <button className="clear">Clear</button>
            <button className="apply">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
