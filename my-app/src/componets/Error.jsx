import React from "react";
import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>404 Not Found</h1>
      <p>Sorry, an error has occured, Requested page not found!</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="back"
      >
        {" "}
        Go Home!
      </button>
    </div>
  );
}
