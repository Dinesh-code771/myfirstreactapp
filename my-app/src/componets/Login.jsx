import React from "react";
import { useState } from "react";
export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [userDetialsErrors, setUserDetailsErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  function handleInputChange(e) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  }
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function addErrorstoTheFeilds(userDetails) {
    let errors = {};
    if (!userDetails.email) {
      errors.email = "Email is required";
    }
    if (!userDetails.password) {
      errors.password = "Password is required";
    }
    if (!userDetails.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (!userDetails.address) {
      errors.address = "Address is required";
    }
    console.log(errors, "sd");
    setUserDetailsErrors(errors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addErrorstoTheFeilds(userDetails);
    let isEmailCorrect = validateEmail(userDetails.email);
    if (!isEmailCorrect) {
      alert("Email is not correct");
      return;
    }
    let isPasswordCorrect =
      userDetails.password === userDetails.confirmPassword;
    if (
      !isPasswordCorrect ||
      !userDetails.password ||
      !userDetails.confirmPassword
    ) {
      alert("Password is not matching");
      return;
    }
    if (!userDetails.address) {
      return;
    }
    console.log(userDetails);
    setUserDetails({
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    });
  }

  function checkIsFormFilled() {
    return (
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.confirmPassword ||
      !userDetails.address
    );
  }

  return (
    //form
    <div className="formClass">
      <form>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
          required
        />
        {userDetialsErrors.email && (
          <p className="error">{userDetialsErrors.email}</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userDetails.password}
          onChange={handleInputChange}
        />
        {userDetialsErrors.password && (
          <p className="error">{userDetialsErrors.password}</p>
        )}
        {/* confirm password: */}
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={userDetails.confirmPassword}
          onChange={handleInputChange}
        />
        {setUserDetailsErrors.confirmPassword && (
          <p className="error">{userDetialsErrors.confirmPassword}</p>
        )}
        {/* address: */}
        <label htmlFor="adress">Address</label>
        <textarea
          value={userDetails.address}
          onChange={handleInputChange}
          name="address"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        {userDetialsErrors.address && (
          <p className="error">{userDetialsErrors.address}</p>
        )}
        <button
          //   disabled={checkIsFormFilled()}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
