import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import Loading from '@Components/Loadings/Loading';

import DoList from './components/DoList';

import Tools from './components/Tools';

import './ToDoList.scss';

export default function TodoList() {
  const doListStore = useSelector(store => store.doListStore)
  
  return (
    <>
      {
        doListStore.loading ? <Loading/> : <></>
      }
      <div className='doList_container'>
          {/* Tools */}
          <Tools/>
          {/* DoList */}
          <DoList />
      </div>
    </>
  )
}
