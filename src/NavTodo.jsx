import React from "react";

export default function NavTodo(props) {
  let count = 0;
  props.todoList.map((todo) => {
    if (!todo.completed) {
      count++;
    }
  });
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        textAlign: "end",
        paddingRight: "40px",
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <h4>Todos Left {count}</h4>
    </div>
  );
}
