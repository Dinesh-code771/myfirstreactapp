import React, { useCallback, useEffect, useRef } from "react";
import Card from "./Card";
// import cardsData from "./data";
import { useState } from "react";
import { useMemo } from "react";

export default function Cards(props) {
  // let searchText = "";
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  // const [usersCount, setUsersCount] = useState(0);
  const [isFeteching, setIsFeteching] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const handleChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
      let filteredUsers = allUsers.filter((card) => {
        return card.name.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setUsers(filteredUsers);
    },
    [searchText]
  );
  let user = useMemo(() => {
    return users.find((user) => {
      return user.email === "Karley_Dach@jasper.info";
    });
  }, [users]);

  useEffect(() => {
    async function fetchData() {
      setIsFeteching(true);
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      setIsFeteching(false);
      inputRef.current.focus();
      setUsers(users);
      setAllUsers(users);
    }
    fetchData();

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div className="searchWrap">
        <h3>My Cards</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ++
        </button>
        <h3>{count}</h3>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Cards..."
            value={searchText}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button
          onClick={() => {
            // fuse(inputRef.current, "inputRef");
            // inputRef.current.focus();
          }}
        >
          search
        </button>

        <h3>Users Count: {users.length}</h3>
        <input></input>

        {user && <h3>{user.name}</h3>}
      </div>
      <div className="flex flex-wrap">
        {/* <Card title={cards[0].title} image={cards[0].image} />
        <Card title={cards[1].title} image={cards[1].image} />
        <Card title={cards[2].title} image={cards[2].image} />
        <Card title={cards[3].title} image={cards[3].image} /> */}

        {!isFeteching ? (
          users.map((user, index) => {
            return (
              <Card
                key={index}
                name={user.name}
                email={user.email}
                website={user.website}
              />
            );
          })
        ) : (
          <h1>Loding...</h1>
        )}
      </div>
    </div>
  );
}
