import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {doListActions} from '@stores/slices/doList.slice.js'
import { useState } from 'react';
import Form from './Form';
import { randomId } from '@mieuteacher/meomeojs';

export default function Tools() {
  const dispatch = useDispatch();
  const doListStore = useSelector(store => store.doListStore)
  const [showAddForm, setShowAddForm] = useState(false)
  const [doStatusList, setDoStatusList] = useState([]);

  useEffect(() => {
    dispatch(doListActions.findAllStatus()); // call api
  }, [])

  useEffect(() => {
    setDoStatusList(doListStore.doStatusList)
  }, [doListStore.doStatusList])

  return (
    <>
      {showAddForm ? <Form dataObj={
          {
            title: "Add To Do", 
            closeFun: setShowAddForm,
            titleSubmitBtn: "Add",
            selectOptions: doStatusList,
            dispatch: dispatch,
            submitFun: doListActions.create,
            type: "add"
          }
        } /> : <></>}
      <div className='tools'>
        <button onClick={() => {
          setShowAddForm(true)
        }} type="button" className="btn btn-primary">Add Task</button>
        <div className="dropdown dropdown-items">
          <a
            className="item-btn btn btn-secondary dropdown-toggle selectLanguage_text"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Fillter
          </a>

          <ul className="dropdown-menu">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(doListActions.findFilter(""))
                }}
              >
                <span className="dropdown-item">All</span>
              </li>
            {
              doStatusList.map((doStatus) => 
                <li
                  key={randomId()}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(doListActions.findFilter(doStatus.id))
                  }}
                >
                  <span className="dropdown-item">{doStatus.title}</span>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}
