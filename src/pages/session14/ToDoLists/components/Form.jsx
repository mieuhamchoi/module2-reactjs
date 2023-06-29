import React from 'react'
import './Form.scss'
import { randomId } from '@mieuteacher/meomeojs';

export default function Form(props) {
  function getStatusInfo(statusId) {
    return props.dataObj.selectOptions.find(status => status.id == statusId);
  }
  return (
    <div className='addFrom_container'>
        <form onSubmit={(e) => {
          e.preventDefault();

          if (e.target.doTitle.value == "" || e.target.doStatus.value == "") {
            return
          }

          props.dataObj.type == "update" ? 
          props.dataObj.dispatch(
            props.dataObj.submitFun(
              {
                doId: props.dataObj.preInfo.id,
                doEdited: {
                  title: e.target.doTitle.value,
                  statusId:  e.target.doStatus.value,
                  addTime:  props.dataObj.preInfo.addTime,
                  remove: props.dataObj.preInfo.remove
                }
              }
            )
          ) :
          props.dataObj.dispatch(
            props.dataObj.submitFun(
              {
                title: e.target.doTitle.value,
                statusId:  e.target.doStatus.value,
                addTime:  Date.now(),
                remove: false
              }
            )
          )
          
          props.dataObj.closeFun(false)   
        }} className='forms'>
            {/* nút close */}
            <div onClick={() => {
              props.dataObj.closeFun(false)
            }} className='form_close_btn'>
              <i className="fa-solid fa-xmark form_close_btn-icon"></i>
            </div>

            {/* title form */}
            <span className='form_title'>{props.dataObj.title}</span>

            {/* input title */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Title
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name='doTitle'
                defaultValue={props.dataObj.type == "update" ? props.dataObj.preInfo.title : ""}
              />
            </div>

            {/* selection status */}
            <select 
            defaultValue={props.dataObj.type == "update" ?
            getStatusInfo(props.dataObj.preInfo.statusId) ? getStatusInfo(props.dataObj.preInfo.statusId).id : "" :
             ""} 
            name="doStatus" className="form-select" aria-label="Default select example">
              <option value="">Select Status</option>
              {
                props.dataObj.selectOptions.map(options => 
                  <option key={randomId()} value={options.id}>{options.title}</option>
                )
              }
            </select>

            <div className='form_btn_groups'>
              <button type="submit" className="btn btn-info">{props.dataObj.titleSubmitBtn}</button>
              <button onClick={() => {
                  props.dataObj.closeFun(false)
              }} type="button" className="btn btn-secondary">Cancel</button>
            </div>
        </form>
    </div>
  )
}
