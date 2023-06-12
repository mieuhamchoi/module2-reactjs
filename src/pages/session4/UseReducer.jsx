import { useReducer, useState } from 'react';

export default function UseReducer() {

    // tạo ra 1 khung reducer tăng giảm số nguyên
  function reducerCount(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  // tạo ra reducer bằng cách dùng usReducer
  const [state, dispatch] = useReducer(reducerCount, { count: 0 });

  return (
    <>
      <div>UseReducer</div>
      <div style={{ display: 'flex' }}>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}> - </button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}> + </button>
      </div>
    </>
  );
}
