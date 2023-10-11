import React from "react";
import { userData } from "./data";
import { useNavigate } from "react-router-dom";
import { changeUserValue } from "./data";
import { Link } from "react-router-dom";
export default function Login() {
  const inputRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = userData.find(
      (u) =>
        u.name === inputRef.current.value &&
        u.password === passwordRef.current.value
    );
    console.log(user,inputRef.current.value,passwordRef.current.value)
    if (user) {
      changeUserValue();
      navigate("/product");
    } else {
      console.log("Invalid username or password!");
      inputRef.current.value = "";
      passwordRef.current.value = "";
      alert("Invalid username or password!");
    }
  };
  return (
    <div>
      <form >
        <label htmlFor="name">name</label>
        <input ref={inputRef}  id="name" type="text" />
        <label htmlFor="password">password</label>
        <input ref={passwordRef} id="password" type="password" />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
      <Link to="/register">clik to register</Link>
    </div>
  );
}
