import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { randomId, getDateInfo } from '@mieuteacher/meomeojs';

import {doListActions} from '@stores/slices/doList.slice.js'
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './Form'

export default function DoList() {
  const dispatch = useDispatch();
  const doListStore = useSelector(store => store.doListStore)

  const [doList, setDoList] = useState([]);
  const [doStatusList, setDoStatusList] = useState([]);

  useEffect(() => {
    dispatch(doListActions.findAll()); // call api
  }, [])

  useEffect(() => {
    setDoList(doListStore.doList) // mỗi khi store loading thì render lại
  }, [doListStore.doList])

  useEffect(() => {
    dispatch(doListActions.findAllStatus()); // call api
  }, [])

  useEffect(() => {
    setDoStatusList(doListStore.doStatusList)
  }, [doListStore.doStatusList])

  const [showForm, setShowForm] = useState(false);
  const [preInfo, setPreInfo] = useState(null);

  return (
    <div className='doList'>
      {showForm ? <Form dataObj={
        {
          title: "Update To Do", 
          closeFun: setShowForm,
          titleSubmitBtn: "Save",
          selectOptions: doStatusList,
          dispatch: dispatch,
          submitFun: doListActions.update,
          preInfo: preInfo,
          type: "update"
        }
      } /> : <></>
      }
      {
        doList.length == 0 ? <div className='noti'>NO TO DO</div> : <></>
      }
      {
        doList.map((doItem) => 
          <div key={randomId()} className='doCard'>
              {/* nut check */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
            </div>
            <div className='desTime'>
              <span className='desTime_des'>{doItem.title}</span>
              <span className='desTime_time'>{doItem.addTime}</span>
            </div>
            <div className='tools'>
                <div onClick={() => {
                  dispatch(doListActions.deleteDo(doItem.id))
                }} className='tool-trash tool'>
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </div>
                <div onClick={() => {
                  setPreInfo(doItem)
                  setShowForm(true)
                }} className='tool-edit tool'>
                  <i className="fa-solid fa-pencil"></i>
                </div>
            </div>
          </div> 
        )
      } 
    </div>
  )
}
