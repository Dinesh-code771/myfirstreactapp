import React, { useEffect } from "react";
import SwiggyMain from "./SwiggyMain";
import dishes from "./SwiggyData";
import resTopData from "./SwiggyTopRes";
import SwiggyResCard from "./SwiggyResCard";
import SwiggyFilter from "./SwiggyFilter";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function SwiggyMainSection() {
  const [restaurants, setRestaurants] = React.useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isFeteching, setIsFeteching] = useState(false);
  const isfilterApplied = useSelector((state) => state.filter.isfilterApplied);
  const filters = useSelector((state) => state.filter.filters);
  useEffect(() => {
    let updatedData = restaurants.filter((restaurant) => {
      return (
        filters
          .find((filter) => filter.name === "Veg/Non-Veg")
          .selectedOption.toLowerCase() === restaurant["category"].toLowerCase()
      );
    });
    setFilteredRes(updatedData);
  }, [isfilterApplied, restaurants]);

  useEffect(() => {
    async function fetchResFromDb() {
      setIsFeteching(true);
      const res = await fetch(`http://localhost:5000/restaurants`);

      const data = await res.json();

      setRestaurants(data);
      setTimeout(() => {
        setIsFeteching(false);
      }, 1200);
    }
    fetchResFromDb();
  }, []);
  return (
    <>
      <SwiggyMain
        text="What's on your mind?"
        data={dishes}
        width={144}
        height={180}
      />
      {/* //top restaurants*/}
      <div className="topRes">
        <h2>Top restaurant chains in Hyderabad</h2>
        <div className="restaurants">
          {resTopData.map((item) => {
            return (
              <SwiggyResCard
                restaurantDetails={item}
                height={182}
                width={273}
              />
            );
          })}
        </div>
      </div>

      {/* all restaurants */}
      <div className="allResWrapper">
        <h2>Restaurants with online food delivery in Hyderabad</h2>
        {/* filter */}
        <SwiggyFilter />

        <div className="allRes">
          {isFeteching ? (
            <div className="loaderWrapper">
              <span className="loader"></span>
            </div>
          ) : (
            filteredRes.map((item) => {
              return (
                <SwiggyResCard
                  restaurantDetails={item}
                  height={220}
                  width={312}
                />
              );
            })
          )}
        </div>
      </div>

      {/* filter model */}
    </>
  );
}
