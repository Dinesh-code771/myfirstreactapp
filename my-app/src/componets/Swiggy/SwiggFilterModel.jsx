import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterModelOpen } from "../../Redux/filterSlice";
import { setHandleClearFilters } from "../../Redux/filterSlice";
import { setHandleChange, setIsFilterApplied } from "../../Redux/filterSlice";
export default function SwiggFilterModel() {
  const isFilterOpen = useSelector((state) => state.filter.isFilterModelOpen);
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState(0);
  const filters = useSelector((state) => state.filter.filters);
  function handleOnChange(e, option, key) {
    if (key === "Ratings") {
      let newFilters = filters.map((filter) => {
        if (filter.name === key) {
          if (filter.selectedOption.includes(option)) {
            return {
              ...filter,
              selectedOption: filter.selectedOption.filter(
                (item) => item !== option
              ),
            };
          } else {
            return {
              ...filter,
              selectedOption: [...filter.selectedOption, option],
            };
          }
        }
        return filter;
      });
      dispatch(setHandleChange(newFilters));
      return;
    }
    let newFilters = filters.map((filter) => {
      if (filter.name === key) {
        return { ...filter, selectedOption: option };
      }
      return filter;
    });
    dispatch(setHandleChange(newFilters));
  }

  function handleClear() {

    dispatch(
      setHandleClearFilters([
        {
          name: "Sort",
          options: [
            "Relevance",
            "Rating",
            "Fastest Delivery",
            "Price: Low to High",
            "Price: High to Low",
          ],
          selectedOption: "Relevance",
        },
        {
          name: "Veg/Non-Veg",
          options: ["Veg", "Non-Veg"],
          selectedOption: "Veg",
        },
        {
          name: "Delivery Time",
          options: ["30 min", "45 min", "60 min"],
          selectedOption: "30 min",
        },
        {
          name: "Cost for two",
          options: ["Less than 200", "Rs.300-Rs.400", "Greater than 600"],
          selectedOption: "Less than 200",
        },
        {
          name: "Ratings",
          options: ["4.0+", "4.5+", "5.0"],
          selectedOption: ["4.0+"],
        },
      ])
    );
  }
  function checkIsDisabled() {
    let isDisabled = true;
    filters.forEach((filter) => {
      if (filter.name === "Ratings") {
        if (filter.selectedOption.length > 0) {
          isDisabled = false;
        }
      } else {
        if (
          filter.selectedOption !== "Relevance" ||
          filter.selectedOption !== "Veg" ||
          filter.selectedOption !== "30 min" ||
          filter.selectedOption !== "Less than 200"
        ) {
          isDisabled = false;
        }
      }
    });
    return isDisabled;
  }

  function handleCloseModel() {
    dispatch(setIsFilterModelOpen(false));
    setTimeout(() => {
      dispatch(setIsFilterApplied(false));
    }, 1000);
  }
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
                      {filters[currentState].name === "Ratings" ? (
                        <input
                          type="checkbox"
                          name={filters[currentState].name}
                          id={option}
                          checked={filters[
                            currentState
                          ].selectedOption.includes(option)} // Updated this line
                          onChange={(e) =>
                            handleOnChange(
                              e,
                              option,
                              filters[currentState].name
                            )
                          }
                        />
                      ) : (
                        <input
                          type="radio"
                          name={filters[currentState].name}
                          id={option}
                          checked={
                            filters[currentState].selectedOption === option
                          } // Updated this line
                          onChange={(e) =>
                            handleOnChange(
                              e,
                              option,
                              filters[currentState].name
                            )
                          }
                        />
                      )}
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
            <button
              isDisabled={checkIsDisabled()}
              onClick={handleClear}
              className="clear"
            >
              Clear
            </button>
            <button
              onClick={() => {
                dispatch(setIsFilterApplied(true));
                handleCloseModel();
              }}
              className="apply"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
