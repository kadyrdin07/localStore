
import React, { useEffect, useState } from "react";
import scss from './Result.module.scss'

const Result = () => {
  const [count, setCount] = useState([]);
  const [state, setState] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, [state]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount([]);
            setState("");
          }}
        >
          DELETE
        </button>
        <button className={scss.button}
          onClick={() => {
            // You need to set the desired state here, for example:
            setState("users");
          }}
        >
          Add
        </button>
      </div>
      <div className={scss.container}>
        {count.map((el) => (
          <div className={scss.totu} key={el.name}>
            <p>{el.name}</p>
            <p>{el.id}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Result;
