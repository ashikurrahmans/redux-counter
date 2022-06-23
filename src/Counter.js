import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Decrement, Increment } from "./actions/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const IncrementHandle = () => {
    dispatch(Increment());
  };
  const DecrementHandle = () => {
    dispatch(Decrement());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>
      <button onClick={IncrementHandle}>InCrement</button>
      <button onClick={DecrementHandle}>Decrement</button>
    </div>
  );
};

export default Counter;
