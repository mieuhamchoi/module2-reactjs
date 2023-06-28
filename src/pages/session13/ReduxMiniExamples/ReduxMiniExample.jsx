import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {miniActions} from '../../../stores/slices/mini.slice'
export default function ReduxMiniExample() {
  const dispatch = useDispatch();
  const miniStore = useSelector(store => store.miniStore)
  return (
    <div>
      <h1>ReduxMiniExample</h1>
      <p>Count: {miniStore.count}</p>
      <button onClick={() => {
        dispatch(
          {
            type: "mini/increment"
          }
        )
      }}>Tăng</button>


    <button onClick={() => {
        dispatch(
          miniActions.decrement()
        )
      }}>Tăng</button>


    <button onClick={() => {
        dispatch(
          {
            type: "mini/increment",
            payload: 5
          }
        )
      }}>set count 5</button>


    <button onClick={() => {
        dispatch(
          miniActions.setCount(5)
        )
      }}>set Count = 5</button>
    </div>
  )
}

