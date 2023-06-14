import React, { useState } from 'react'

export default function TaskTable(props) {
    const [taskId, setTaskId] = useState(null);
    const [taskName, setTaskName] = useState(null);
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [targetName, setTargetName] = useState(null);
    
    const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='taskTable'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.taskList.map((task, index) => 
                        
                            !isEdit ?                         
                            <tr key={task.taskName + index}>
                                <th scope="row">{index + 1}</th>
                                <td>{task.taskName}</td>
                                <td>{task.date}</td>
                                <td>{task.status}</td>
                                <td>{task.targetName}</td>
                                <td>
                                    <button onClick={() => {
                                        setIsEdit(!isEdit)
                                        setTaskId(task.taskId)
                                        setTaskName(task.taskName)
                                        setDate(task.date)
                                        setStatus(task.status)
                                        setTargetName(task.targetName)
                                    }} style={{marginRight: "10px"}} type="button" className="btn btn-success">Update</button>
                                    <button onClick={() => {
                                        props.handleDeleteTask({ type: 'deleteTask', taskId: task.taskId });
                                    }} type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            :   
                            taskId == task.taskId ?                         
                             <tr key={task.taskName + task.taskId}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <input
                                        value={taskName}
                                        onChange={(e) => {
                                            setTaskName(e.target.value)
                                        }}
                                        type="text"
                                        className="form-control"
                                        placeholder="Task Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </td>
                                <td>
                                    <input onChange={(e) => {
                                        setDate(e.target.value)
                                    }} value={date} style={{margin: "10px 0"}} type="date"></input>
                                </td>
                                <td>
                                    <select value={status} onChange={(e) => {
                                        setStatus(e.target.value)
                                    }}  className="form-select" aria-label="Default select example">
                                        <option value="Choose" >Choose</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Pullfill">Pullfill</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                </td>
                                <td>
                                    <input
                                        value={targetName}
                                        onChange={(e) => {
                                            setTargetName(e.target.value)
                                        }}
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => {
                                        props.handleUpdateTask({ type: 'updateTask', taskUpdate: {
                                            taskId,
                                            taskName,
                                            date,
                                            status,
                                            targetName
                                        } })
                                        setIsEdit(!isEdit)
                                    }} style={{marginRight: "10px"}} type="button" className="btn btn-success">Save</button>
                                </td>
                            </tr>
                            :                             <tr key={task.taskName + index}>
                            <th scope="row">{index + 1}</th>
                            <td>{task.taskName}</td>
                            <td>{task.date}</td>
                            <td>{task.status}</td>
                            <td>{task.targetName}</td>
                            <td>
                                <button onClick={() => {
                                    setIsEdit(!isEdit)
                                    setTaskId(task.taskId)
                                    setTaskName(task.taskName)
                                    setDate(task.date)
                                    setStatus(task.status)
                                    setTargetName(task.targetName)
                                }} style={{marginRight: "10px"}} type="button" className="btn btn-success">Update</button>
                                <button onClick={() => {
                                    props.handleDeleteTask({ type: 'deleteTask', taskId: task.taskId });
                                }} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
