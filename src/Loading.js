import { Outlet, Link, redirect } from "react-router-dom";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { data };
}
