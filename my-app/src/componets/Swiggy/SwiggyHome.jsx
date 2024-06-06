import React from "react";
import SwiggyNavBar from "./SwiggyNavBar";
import { Outlet } from "react-router-dom";
// import "./SwiggyHome.css";
export default function SwiggyHome() {
  return (
    <div className="">
      <SwiggyNavBar />
      <div className="sectionWrapper main">
        <Outlet  />
      </div>
    </div>
  );
}
