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

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
    </div>
  );
};

export default Home;
