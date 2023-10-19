import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function ULogin() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  // if user is lredy logged in, redirect to home page
  useEffect(() => {
    localStorage.getItem("userDetails") && navigate("/");
  }, []);
  const handleSubmit = (e) => {
    // store the user details in local storage
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    let userRole = "member";
    if (
      userDetails.email === "admin@gmail.com" &&
      userDetails.password === "admin@123"
    ) {
      userRole = "admin";
    }

    localStorage.setItem("userRole", userRole);
    setUserDetails({ email: "", password: "" });
    navigate("/");
  };

  return (
    //Login form
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={userDetails.email}
          onChange={(e) => {
            setUserDetails({ ...userDetails, email: e.target.value });
          }}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={userDetails.password}
          onChange={(e) => {
            setUserDetails({ ...userDetails, password: e.target.value });
          }}
          type="password"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
