import React from "react";
import { useNavigate } from "react-router-dom";
export default function TodoListing(props) {
  const navigate = useNavigate();
  function deleteTodo(name) {
    console.log(name);
    // props.changeTodos(props.todoList.filter((todo, i) => i !== index));
    let updatedArr = props.todoList.filter((todo, i) => {
      if (todo.name !== name) {
        return todo;
      }
    });
    props.changeTodos(updatedArr);
  }

  function handleEdit(index) {
    console.log(index);
    let updatedArr = props.todoList.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    props.changeTodos(updatedArr);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
      }}
    >
      {props.todoList.map((todo, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              navigate(`/todo/${todo.name}`);
            }}
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "50%",
              marginBottom: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                fontWeight: todo.completed ? "bold" : "normal",
              }}
            >
              {todo.name}
            </div>
            <div>
              <button onClick={() => deleteTodo(todo.name)}>Delete</button>
              <button onClick={() => handleEdit(index)}>
                {!todo.completed ? "completed" : "not completed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
