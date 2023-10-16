import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function PProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      console.log(data, "data");
      setData(data);
    }
    fetchData();
  }, [id]);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "80%",
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "60%",
            width: "20%",
          }}
          className="left"
        >
          <img
            src={data.image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>

        <div
          style={{
            border: "1px solid black",
            height: "60%",
            paddingInline: "50px",
            width: "80%",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="right"
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h2>{data.price}</h2>
        </div>
      </div>
    </div>
  );
}
