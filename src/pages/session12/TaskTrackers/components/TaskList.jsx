import React, { useState, useEffect, useRef } from 'react';
import { randomId } from '@mieuteacher/meomeojs';
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export default function TaskList() {
  const dispatch = useDispatch()
    const commonStore = useSelector(store => store.commonStore)
    const popContent = useRef();
    const [tasks, setTasks] = useState(null);
    const [showPop, isShowPop] = useState(false);

    function formatDate(date) {
        if (date) {
            //return moment(String(date)).format('DD/MM/YYYY <> hh:mm:ss')
            return {
                day: moment(String(date)).format('DD/MM/YYYY'),
                time: moment(String(date)).format('hh:mm:ss') + "s"
            }
        }
        return null
    }

    const handleDeleteTask = (taskId) => {
      axios.delete("http://localhost:3000/tasks/" + taskId)
      .then(res => {
        dispatch({
          type: "RELOAD"
        })
      })
    }

    useEffect(() => {
        axios.get("http://localhost:3000/tasks")
        .then(res => setTasks(res.data))
        .catch(er => {
          console.log("lỗi")
        })
      }, [commonStore.reload])
  return (
    <>
            {/* Task tracker list */}
            <div className='taskTracker_taskList'>
            <table className="table">
              <thead>
                <tr className='table_th'>
                  <th scope="col">
                    <div className="table_content">#</div>
                  </th>
                  <th scope="col">
                    <div className="table_content">Task Name</div>
                  </th>
                  <th scope="col">
                    <div className="table_content">Des</div>
                  </th>
                  <th scope="col">
                    <div className="table_content">Start Time</div>
                  </th>
                  <th scope="col">
                    <div className="table_content">End Time</div>
                  </th>
                  <th scope="col">
                   <div className="table_content">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks?.sort((a,b) => b.setReminder - a.setReminder).map((task, index) => 
                    <tr key={randomId()}>
                      <th scope="row">
                        <div className="table_content">
                          {index  + 1 }
                          <i style={{color: task.setReminder?"green":"black"}} className="fa-solid fa-star"></i>
                        </div>
                      </th>
                      <td>
                        <div className="table_content">
                          {task.name}
                        </div>
                      </td>
                      <td>
                        <div className="table_content actions">
                            <button  onClick={() => {
                                  isShowPop(true);
                                  popContent.current.innerHTML = task.des;
                            }} type="button" className="btn btn-info">
                              Show
                            </button>
                        </div>
                      </td>
                      <td>
                        <div className="table_content">
                          {formatDate(task.startWorkTime).day} - {formatDate(task.startWorkTime).time}
                        </div>
                      </td>
                      <td>
                        <div className="table_content">
                          {formatDate(task.endWorkTime).day} - {formatDate(task.startWorkTime).time}
                        </div>
                      </td>
                      <td>
                        <div className="table_content actions">
                            <button type="button" className="btn btn-info">
                              Update
                            </button>
                            <button onClick={() => handleDeleteTask(task.id)} type="button" className="btn btn-danger">
                              Delete
                            </button>
                        </div>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
        </div>
        {/* Pop up */}       
          <div onClick={() => {
            isShowPop(false)
          }} className={`detailPop ${showPop ? 'show' : ''}`}>
            <div ref={popContent} className='detailPop-contents'>

            </div>
          </div>
          </>
  )
}
