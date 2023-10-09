import logo from "./logo.svg";
import "./App.css";
import Nav1 from "./Nav1";
import Nav from "./Nav";
import Home from "./Home";
import { useState, useEffect, createContext } from "react";
import Child from "./Child";
import Form from "./Form";
import { type } from "@testing-library/user-event/dist/type";
import Hookexapmle from "./Hookexapmle";
import Home2 from "./Home2";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
export const MyContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { data } = useLoaderData();
  const navigate = useNavigate();
  console.log(data, "data");
  // const [searchValue, setSearchValue] = useState("");
  // const [details, setDetails] = useState([]);
  // const [filterResult, setFilterResult] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(0);
  // const [sort, setSort] = useState(false);
  // // fetch
  // useEffect(() => {
  //   // go to backend fetch details
  //   async function fetchData() {
  //     const res = await fetch(`https://fakestoreapi.com/products`);
  //     const data = await res.json();
  //     console.log(data, "dd");
  //     setDetails(data);
  //   }
  //   fetchData();
  // }, []);

  // // search
  // useEffect(() => {
  //   let filteredData = details.filter((item) => {
  //     return item.title.toLowerCase().includes(searchValue.toLowerCase());
  //   });
  //   setFilterResult(filteredData);
  //   if (searchValue === "") {
  //     setSelectedOption(0);
  //   }
  // }, [searchValue, details]);

  // // filter dropdown
  // useEffect(() => {
  //   let filteredData = details.filter((item) => {
  //     if (parseInt(selectedOption) === 99) {
  //       console.log("ihs");
  //       return item.price < 100;
  //     } else if (parseInt(selectedOption) === 101) {
  //       return item.price >= 100;
  //     } else {
  //       return item;
  //     }
  //   });
  //   setFilterResult(filteredData);
  // }, [selectedOption, details]);

  // // sort
  // useEffect(() => {
  //   let filteredData = [...filterResult];
  //   if (sort) {
  //     filteredData.sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //   } else {
  //     filteredData.sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //   }
  //   setFilterResult(filteredData);
  // }, [sort]);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div>
        {/* <Nav
        selectedOption={selectedOption}
        searchValue={searchValue}
        onSearch={setSearchValue}
        onSelect={setSelectedOption}
        sort={sort}
        setSort={setSort}
      />

      <Home details={filterResult} />
      <Form/> */}
        {/* <Hookexapmle/> */}
        <Nav1 />
        <div>
          <Outlet />
        </div>
        {data.map((item) => {
          return (
            <div>
              <h1 onClick={()=>{navigate(`/product/${item.id}`)}}>{item.title}</h1>
              <img src={item.image} width={20} height={30} />
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </MyContext.Provider>
  );
}

export default App;
