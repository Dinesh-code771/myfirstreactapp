import React, { useEffect, useState } from "react";
import "./home.css";
import { isUser } from "./data";
import Nav from "./Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavTodo from "./NavTodo";
import TodoListing from "./TodoListing";
export default function Home() {
  const [todoValue, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const navigate = useNavigate();
  function handleEnter(e) {
    if (e.key === "Enter") {
      setTodoList([...todoList, { name: todoValue, completed: false }]);
      setValue("");
    }
  }
  return (
    <div>
      <NavTodo todoList={todoList} />
      {/* adding todo */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <input
          style={{
            width: "50%",
            height: "50px",
            borderRadius: "13px",
            padding: "10px",
            fontSize: "20px",
            border: "2px solid black",
          }}
          onKeyDown={(e) => handleEnter(e)}
          type="text"
          value={todoValue}
          onChange={(e) => setValue(e.target.value)}
          name="Todo"
          id="todo"
          placeholder="Add Todo"
        />
      </div>

      <div style={{ display: "flex" }}>
        <TodoListing todoList={todoList} changeTodos={setTodoList} />
        <Outlet />
      </div>
      {/* todoListing */}
    </div>
  );
}
