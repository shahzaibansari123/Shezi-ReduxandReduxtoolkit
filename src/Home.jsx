import React from "react";
import { useDispatch } from "@reduxjs/toolkit";

const Home = (value) => {
  const dispatch = useDispatch();
  const value = 20;

  const addBtn = () => {};

  const subBtn = () => {};

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
    </div>
  );
};

export default Home;
