import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export default function Hookexapmle() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([
    { name: "dinesh", age: 234 },
    { name: "fdhjh", age: 6234 },
    { name: "fshg", age: 26734 },
    { name: "dinfghesh", age: 67234 },
    { name: "dinfdghesh", age: 246734 },
    { name: "tyr", age: 464 },
    { name: "ty", age: 23674 },
    { name: "dfhfd", age: 2367 },
    { name: "fdhg", age: 27634 },
  ]);

  // this will run after component mounted and after 7 sec data gets updated
  useEffect(() => {
    setTimeout(() => {
      setData([
        { name: "dinesh", age: 234 },
        { name: "fdhjh", age: 6234 },
        { name: "fshg", age: 26734 },
        { name: "dinfghesh", age: 67234 },
        { name: "dinfdghesh", age: 246734 },
        { name: "tyr", age: 46435435435434 },
        { name: "ty", age: 23674 },
        { name: "dfhfd", age: 2367 },
        { name: "fdhg", age: 27634 },
      ]);
    }, 7000);
  }, []);

  const name = useMemo(() => {
    let largestAgeName = data[0];
    for (let i = 0; i < data.length; i++) {
      if (data[i].age > largestAgeName.age) {
        largestAgeName = data[i];
      }
    }
    console.log(largestAgeName.name, largestAgeName.age);
    return largestAgeName.name;
  }, [data]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ++
      </button>
      <p>{name}</p>
      <p>lorem*2sf fkghsk klsfhgklsh hkls s fkfkgfg</p>
    </div>
  );
}
