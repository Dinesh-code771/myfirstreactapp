import React from "react";

export default function About() {
  const names = ["John", "Paul", "George", "Ringo"];
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <a style={{ color: "black" }} href={`/about/${name}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
