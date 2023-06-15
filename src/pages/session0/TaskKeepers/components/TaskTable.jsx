import React, { useState } from "react";

export default function TaskTable(props) {
  const [editTask, setEditTask] = useState(null);

  const handleEdit = (task) => {
    setEditTask(task);
  };

  const handleSave = () => {
    props.handleUpdateTask({
      type: "updateTask",
      taskUpdate: {
        ...editTask,
      },
    });
    setEditTask(null);
  };

  return (
    <div className="taskTable">
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
          {props.taskList.map((task, index) => (
            <tr key={task.taskId}>
              <th scope="row">{index + 1}</th>
              <td>
                {editTask && editTask.taskId === task.taskId ? (
                  <input
                    value={editTask.taskName}
                    onChange={(e) =>
                      setEditTask({ ...editTask, taskName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Task Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                ) : (
                  task.taskName
                )}
              </td>
              <td>
                {editTask && editTask.taskId === task.taskId ? (
                  <input
                    value={editTask.date}
                    onChange={(e) =>
                      setEditTask({ ...editTask, date: e.target.value })
                    }
                    style={{ margin: "10px 0" }}
                    type="date"
                  />
                ) : (
                  task.date
                )}
              </td>
              <td>
                {editTask && editTask.taskId === task.taskId ? (
                  <select
                    value={editTask.status}
                    onChange={(e) =>
                      setEditTask({ ...editTask, status: e.target.value })
                    }
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Choose">Choose</option>
                    <option value="Pending">Pending</option>
                    <option value="Pullfill">Pullfill</option>
                    <option value="Reject">Reject</option>
                  </select>
                ) : (
                  task.status
                )}
              </td>
              <td>
                {editTask && editTask.taskId === task.taskId ? (
                  <input
                    value={editTask.targetName}
                    onChange={(e) =>
                      setEditTask({ ...editTask, targetName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                ) : (
                  task.targetName
                )}
              </td>
              <td>
                {!editTask || editTask.taskId !== task.taskId ? (
                  <>
                    <button
                      onClick={() => handleEdit(task)}
                      style={{ marginRight: "10px" }}
                      type="button"
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      onClick={() =>
                        props.handleDeleteTask({
                          type: "deleteTask",
                          taskId: task.taskId,
                        })
                      }
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleSave}
                    style={{ marginRight: "10px" }}
                    type="button"
                    className="btn btn-success"
                  >
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
