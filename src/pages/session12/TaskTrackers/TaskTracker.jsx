import React, { useState, useEffect, useRef } from 'react';
import './TaskTracker.scss'
import Add from './pages/Add'
import TaskList from './components/TaskList'
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom'

export default function TaskTracker() {
  const navigator = useNavigate();
  const location = useLocation();

  function checkLocation() {
    if (location.pathname.split("/")[location.pathname.split("/").length - 1] == "add") {
      return true
    }else {
      return false
    }
  }

  return (
    <div className='taskTracker_container'>
      <div className='taskTracker_forms'>
        {/* Nav bar form */}
        <div className='taskTracker_nav'>
            <span className='taskTracker_nav-text'>Task Tracker</span>
            {
              checkLocation() ? 
              <button onClick={() => {
                navigator('about')
              }} type="button" className="taskTracker_nav-btn btn btn-danger">CLOSE</button> :
              <button onClick={() => {
                navigator('add')
              }} type="button" className="taskTracker_nav-btn btn btn-success">ADD</button>  
            }
        </div>
        {/* Form input data */}
        <Outlet></Outlet>
        {/* Task list */}
        <TaskList></TaskList>
        {/* Naviga */}
        <div className='footerNavbar'>
          <span>Mini Project Apis - </span>
          <Link to={'about'}>About</Link>
        </div>
      </div>
    </div>
  )
}
