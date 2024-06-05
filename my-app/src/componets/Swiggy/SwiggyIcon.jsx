import React from "react";

export default function SwiggyIcon({ icon, text }) {
  return (
    <div className="iconStyling">
      {icon}
      <span>{text}</span>
    </div>
  );
}
