import React from 'react'
import {useReducerFake} from './examples/reactFake';

export default function LearnUseReducer() {
  /*
          useReducer() trong react js là gì.
    - bản chất useReducer() là một function của thư viện react js.
    => Ví dụ minh họa thư viện react js xem trong examples/reactFake.js

  */
        // Khởi tạo state ban đầu
    const initialState = { count: 0 };

    // Định nghĩa reducerFunction
    function reducer(state, action) {
      switch (action.type) {
        case 'INCREMENT':
          console.log("đã vào", state.count)
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    }

    // Sử dụng useReducer
    const [state, dispatch] = useReducerFake(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <div>
          <button onClick={() => {
            dispatch({type: "INCREMENT"})
          }}>Tăng</button>
      </div>
      <div>
          <button onClick={() => {
            dispatch({type: "DECREMENT"})
          }}>Giảm</button>
      </div>
    </>
  )
}
