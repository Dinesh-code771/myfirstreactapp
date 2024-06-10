import React from "react";
import SwiggyNavBar from "./SwiggyNavBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsFilterModelOpen } from "../../Redux/filterSlice";
import SwiggFilterModel from "./SwiggFilterModel";
// import "./SwiggyHome.css";
export default function SwiggyHome() {
  const isFilterOpen = useSelector((state) => state.filter.isFilterModelOpen);
  const dispatch = useDispatch();
  return (
    <div className="swiggyHome ">
      <SwiggyNavBar />
      <div className="sectionWrapper main">
        <Outlet />
      </div>
      {isFilterOpen && <SwiggFilterModel />}
    </div>
  );
}
