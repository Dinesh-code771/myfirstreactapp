import React from "react";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>Homcdvhe</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>

      <input
        type="text"
        value={props.searchValue}
        onChange={(e) => {
          props.onSearch(e.target.value);
        }}
        placeholder="Search"
      ></input>

      <select
        onChange={(e) => {
          props.onSelect(e.target.value);
        }}
        value={props.selectedOption}
      >
        <option value={0}>select</option>
        <option value={99}>Below 100</option>
        <option value={101}>Above 100</option>
      </select>
      <button
        onClick={() => {
          props.setSort(!props.sort);
        }}
      >
        Sort {props.sort ? "up" : "down"}
      </button>
    </nav>
  );
}
