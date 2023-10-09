import React from "react";
import { useState } from "react";
export default function Form() {
  const [details, setDetails] = useState({
    name: "",
    password: "",
  });

  function onSubmit(e) {
    e.preventDefault();
  console.log(details.name , details.password)
  }
  return (
    <form className="form">
      <label>Namea</label>
      <input
        type="text"
        value={details.name}
        onChange={(e) => {
          console.log(e.target.value);
          setDetails({ ...details, name: e.target.value });
        }}
      ></input>

      <label>Password</label>
      <input
        type="password"
        value={details.password}
        onChange={(e) => {
          console.log(e.target.value);
          setDetails({ ...details, password: e.target.value });
        }}
      ></input>

      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
