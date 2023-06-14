import { useReducer, useState } from 'react';

export default function UseReducer() {
  // khởi tạo state
  const initState = { count: 0, value: 0 };
  
  // khởi tạo reducer function 
  function reducerCount(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'SETDEFAULT':
        console.log("action.value",action.value)
        return { ...state, count: action.value.number }; // Sử dụng giá trị từ action để set state
      default:
        throw new Error();
    }
  }
  
  // Dùng 2 nguyên liệu State và Redeucer function kết hợp useReducer tạo ra state reducer
  const [state, dispatch] = useReducer(reducerCount, initState);
  

  return (
    <>
      <div>UseReducer</div>
      <div>
        <span>Count: {state.count}</span>
        <br></br>
        <span>Value: {state.value}</span>
        <br></br>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}> - </button>
        <br></br>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}> + </button>
        <br></br>
        <button onClick={() => dispatch({ type: 'SETDEFAULT', value: {number: 10, name: "Phước"} })}>Set</button>

      </div>
    </>
  );
}
