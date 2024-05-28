import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Context from "./Context";
export default function ContextProvider(props) {
  const [selectedUsers, setSelectedUsers] = useState([]);
  return (
    <Context.Provider
      value={{
        selectedUsers,
        setSelectedUsers,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
