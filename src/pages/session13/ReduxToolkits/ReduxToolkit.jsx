import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {incrementCount, setCount} from '../../../stores/index.store'

export default function ReduxToolkit() {
  const dispatch = useDispatch();

  const countStore = useSelector(store => store.countStore)

  useEffect(() => {
    console.log("countStore", countStore)
  }, [countStore])
  return (
    <>
      <div>ReduxToolkit</div>
      <button onClick={() => {
        dispatch(incrementCount())
      }}>Tăng</button>
      <button onClick={() => {
        dispatch(setCount(5))
      }}>set</button>
    </>
  )
}
