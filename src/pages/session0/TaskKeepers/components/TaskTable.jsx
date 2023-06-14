import React from 'react'

export default function TaskTable(props) {
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
                        <tr key={task.taskName + index}>
                            <th scope="row">{index + 1}</th>
                            <td>{task.taskName}</td>
                            <td>{task.date}</td>
                            <td>{task.status}</td>
                            <td>{task.targetName}</td>
                            <td>
                                <button style={{marginRight: "10px"}} type="button" className="btn btn-success">Update</button>
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
