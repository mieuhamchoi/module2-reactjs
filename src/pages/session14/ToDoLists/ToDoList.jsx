import React, { useEffect } from 'react'
import {commonActions} from '@stores/slices/common.slice.js'

export default function TodoList() {

  useEffect(() => {
    console.log("commonActions", commonActions)
  }, [])
  return (
    <div>todoList</div>
  )
}
