import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adition, remove } from "./slices/silebarSlice";
export default function DummySideBar() {
  const [value, setValue] = React.useState("");
  const names = useSelector((state) => state.sideBar.names);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {names.map((name, i) => {
          return (
            <div>
              {name}
              <button
                onClick={() => {
                  dispatch(remove(i));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(adition(value));
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
