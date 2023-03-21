import React from "react";
import { useDispatch } from "@reduxjs/toolkit";

const Home = (value) => {
  const dispatch = useDispatch();
  const value = 20;

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

const addValueBy25 = () => {
    dispatch({
      type: "incrementByValue",
payload: 25;
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };

const subValueBy25 = () => {
    dispatch({
      type: "decrementByValue",
payload: 25;
    });
  };

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
    
      <button onClick={addValueBy25}>increment by 25</button>
<button onClick={subValueBy25}>decrement by 25</button>
</div>
  );
};

export default Home;
