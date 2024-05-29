import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import Context from "./Context";
export default function Card(props) {
  const values = useContext(Context);
  // function handleClick(userName) {
  //   // check if the user is already in the selectedUsers array
  //   if (values.selectedUsers.find((user) => user === userName)) {
  //     let newSelectedUser = values.selectedUsers.filter(
  //       (user) => user !== userName
  //     );
  //     values.setSelectedUsers(newSelectedUser);
  //     return;
  //   }
  //   // else add the user to the selectedUsers array
  //   values.setSelectedUsers([...values.selectedUsers, userName]);
  // }
  let text = "ADD Me";
  // if (values.selectedUsers.find((user) => user === props.name)) {
  //   text = "Remove Me";
  // }
  return (
    <div className="card">
      <h3>{props.name}</h3>

      {/* <img src={props.image} alt="logo" /> */}
      <p>{props.email}</p>
      <a href={`${props.website}`}>website</a>
      {/* <button onClick={() => handleClick(props.name)}>{text}</button> */}
    </div>
  );
}
