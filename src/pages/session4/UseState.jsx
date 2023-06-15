import React, { useState } from "react";
import Student from "../../components/Student";
export default function UseState() {
  const [numberOne, setNumberOne] = useState(0);
  const [studentList, setStudentList] = useState([
    {
      name: "Phước",
      age: 24,
    },
    {
      name: "Trung",
      age: 24,
    },
    {
      name: "Thư",
      age: 24,
    },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <>
      <h1>Use State Count Number</h1>
      <div>useState: {numberOne}</div>
      <button
        onClick={() => {
          setNumberOne(numberOne + 1);
        }}
        type="button"
        className="btn btn-primary"
      >
        Click Increment Number
      </button>
      <br />
      <h1>Use State With Array</h1>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Student Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Student Age
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setStudentList((prevStudentList) =>
            prevStudentList.concat({
              name: name,
              age: age,
            })
          );
        }}
        type="button"
        className="btn btn-primary"
      >
        Thêm
      </button>
      <Student studentList={studentList}></Student>
    </>
  );
}
