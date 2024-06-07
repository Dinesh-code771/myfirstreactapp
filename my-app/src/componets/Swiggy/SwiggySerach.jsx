import React from "react";
import SwiggyMain from "./SwiggyMain";
import dishes from "./SwiggyData";

export default function SwiggySerach() {
  return (
    <div className="searchWrapper">
      <div className="searchSection">
        <input
          className="swiggySearch"
          type="text"
          placeholder="Search for restaurants and food"
        />
        <div className="cuisinesWrapper">
          <SwiggyMain
            text="Popular Cuisines"
            data={dishes}
            width={82}
            height={93}
          />
        </div>

      </div>
    </div>
  );
}
