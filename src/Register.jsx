import React from "react";
import { userData } from "./data";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [details, setDetails] = React.useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("call")
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      alert("passwords do not match");
    } else {
      userData.push({ name: details.name, password: details.password });
      navigate("/");
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="name">name</label>
        <input
          onChange={handleChange}
          name="name"
          value={details.name}
          type="text"
          id="name"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          name="password"
          value={details.password}
          type="password"
          id="password"
        />
        <label htmlFor="confirmPassword">confirm password</label>
        <input
          onChange={handleChange}
          name="confirmPassword"
          value={details.confirmPassword}
          type="password"
          id="confirmPassword"
        />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
