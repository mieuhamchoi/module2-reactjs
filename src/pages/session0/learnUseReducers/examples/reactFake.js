import { useState } from "react";

export function useReducerFake(reducerFunction, initState) {
    // Khởi tạo state ban đầu
    const [state, setState] = useState(initState)
  
    // Hàm dispatch để gửi action vào reducerFunction và cập nhật state
    function dispatch(action) {
      setState(reducerFunction(state, action))
    }
  
    // Trả về state và hàm dispatch
    return [state, dispatch];
  }
  
  export default {
    useReducerFake
  }
  