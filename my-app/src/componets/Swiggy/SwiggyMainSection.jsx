import React, { useEffect } from "react";
import SwiggyMain from "./SwiggyMain";
import dishes from "./SwiggyData";
import resTopData from "./SwiggyTopRes";
import SwiggyResCard from "./SwiggyResCard";
import SwiggyFilter from "./SwiggyFilter";
import { useSelector } from "react-redux";
export default function SwiggyMainSection() {
  const [restaurants, setRestaurants] = React.useState(resTopData);

  const filters = useSelector((state) => state.filter.filters);
  useEffect(() => {
    let updatedData = resTopData.filter((restaurant) => {
      return (
        filters
          .find((filter) => filter.name === "Veg/Non-Veg")
          .selectedOption.toLowerCase() === restaurant["category"].toLowerCase()
      );
    });
    setRestaurants(updatedData);
  }, [filters]);
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
          {restaurants.map((item) => {
            return (
              <SwiggyResCard
                restaurantDetails={item}
                height={220}
                width={312}
              />
            );
          })}
        </div>
      </div>

      {/* filter model */}
    </>
  );
}
