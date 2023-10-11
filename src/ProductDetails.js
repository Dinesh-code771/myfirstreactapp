import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      console.log(data, "data");
      setData(data);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      {data.title}
      <img src={data.image} width={50} height={50}></img>
    </div>
  );
}
