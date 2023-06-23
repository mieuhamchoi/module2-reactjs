import React, { useState } from "react";
import { randomId } from "@mieuteacher/meomeojs";
export default function NewTaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("1999-12-29");
  const [status, setStatus] = useState("Choose");
  const [targetName, setTargetName] = useState("");

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
              taskId: randomId(),
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
