import React, { useState } from "react";

export default function NewTaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("1999-12-29");
  const [status, setStatus] = useState("Choose");
  const [targetName, setTargetName] = useState("");
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  return (
    <form className="newTaskFrom">
      {/* Date Picker */}
      <input
        onChange={(e) => {
          setDate(e.target.value);
        }}
        value={date}
        style={{ margin: "10px 0" }}
        type="date"
      ></input>
      {/* Input Task Name */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Task Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      {/* Input User Name */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          value={targetName}
          onChange={(e) => {
            setTargetName(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="User Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      {/* Status */}
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="Choose">Choose</option>
        <option value="Pending">Pending</option>
        <option value="Pullfill">Pullfill</option>
        <option value="Reject">Reject</option>
      </select>
      <button
        onClick={(event) => {
          event.preventDefault(); // vô hiệu hành vi
          props.handleAddTask({
            type: "addTask",
            newTask: {
              taskId: uuidv4(),
              taskName,
              date,
              status,
              targetName,
            },
          });
        }}
        style={{ marginTop: "0.5em" }}
        type="submit"
        className="btn btn-primary"
      >
        Add
      </button>
    </form>
  );
}
