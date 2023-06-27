import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
} from "../../stores-redux/countStores/count.action";

export default function ExampleRedux() {
  const countStore = useSelector((state) => state.countStore); // Lấy giá trị count từ store
  const dispatch = useDispatch();
  return (
    <>
      <p>Count: {countStore.count}</p>
      <br></br>
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        incrementCount
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        decrementCount
      </button>
    </>
  );
}
