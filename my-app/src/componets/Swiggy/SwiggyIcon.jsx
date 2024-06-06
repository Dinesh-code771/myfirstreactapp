import React from "react";

export default function SwiggyIcon({ icon, text, currentPathName, path }) {
  return (
    <div
      className={`iconStyling ${currentPathName === path ? "iconColor" : ""}`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
