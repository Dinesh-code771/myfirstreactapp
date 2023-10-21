import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addition } from "../slices/userDetails";
export default function AddingUser() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addition(userDetails));
    setUserDetails({
      name: "",
      age: "",
      email: "",
    });
    // store the user details in local storage
  };
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <form action="handleSubmit">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={userDetails.name}
        name="name"
        placeholder="enter user name....."
      />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={userDetails.age}
        name="age"
        placeholder="enter user age....."
      />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={userDetails.email}
        name="email"
        placeholder="enter user email....."
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Add User
      </button>
    </form>
  );
}
