import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {countActions} from '../../stores/slices/count.slice'

export default function ExampleRedux() {
  const countStore = useSelector((state) => state.countStore); // Lấy giá trị count từ store
  const dispatch = useDispatch();
  return (
    <>
      <p>Count: {countStore}</p>
      <br></br>
      <button
        onClick={() => {
          dispatch(countActions.increment());
        }}
      >
        incrementCount
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(countActions.decrement());
        }}
      >
        decrementCount
      </button>
    </>
  );
}
