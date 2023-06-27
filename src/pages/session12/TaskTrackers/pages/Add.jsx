import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import JoditEditor from 'jodit-react';

import { DatePicker, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';


const { RangePicker } = DatePicker;


export default function Add() {
  const dispatch = useDispatch()
  const [taskNameValue, setTaskNameValue] = useState('');
  const editor = useRef(null);
	const [content, setContent] = useState('');

	const config ={
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Mô tả nhiệm vụ của bạn"
  }

  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);

  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= 30;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 30;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };

  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let task = {
      name: event.target.taskName.value,
      des: content,
      startWorkTime: value?value[0].$d:null,
      endWorkTime: value?value[1].$d:null,
      setReminder: checked
    }
    if (!task.startWorkTime || !task.endWorkTime) {
      alert("Vui lòng chọn thời gian")  
      return
    }
    if (!task.name || !task.des || task.setReminder == null) {
      alert("Vui lòng điền đủ các trường")
      return
    }
    
    axios.post("http://localhost:3000/tasks", task)
    .then(res => {
      console.log("thành công", res)
      setValue(null);
      setChecked(false);
      setTaskNameValue("");
      setContent("");
      dispatch({
        type: "RELOAD"
      })
    })
    .catch(er => {
      console.log("gặp lỗi", er)
    })
  }
  return (
    <form className='taskTracker_form' onSubmit={handleFormSubmit}>
    <div className={`form_inputs ${taskNameValue?"active":''}`}>
        <input value={taskNameValue} onChange={(e) => {
          setTaskNameValue(e.target.value)
        }} name="taskName" className="form_inputs-input" type="text"/>
        <span className="form_inputs-placeholder">Task Name: </span>
    </div>

    <div className='filed_title'>Task Time</div>
    <RangePicker
      className='form-datePicker'
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={(val) => {
        setValue(val);
        console.log("value", value)
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
    />

    <Checkbox name="setReminder" className='form-checkBox' checked={checked} disabled={disabled} onChange={onChange}>
      Set Reminder
    </Checkbox>

    <div className='filed_title'>Task Des</div>
    <JoditEditor
      className='form-textEditor'
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {
        
      }}
    />

    <div className='form-save'>
      <button type="submit" className="btn btn-dark">Save Task</button>
    </div>
</form>
  )
}
