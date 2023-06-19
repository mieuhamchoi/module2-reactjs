import React, { useState, useContext, useEffect } from "react";

// import context được provider
import {toDolistContext} from "./Todolist";


export default function EditTools() {

  // dùng useContext để đọc context 
  const {state, dispatch, isEditForm} = useContext(toDolistContext);

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const [doListName, setDoListName] = useState('');
  const [doListNameUpdate, setDoListNameUpdate] = useState("");

  useEffect(() => {
    if (isEditForm.doListUpdate) {
      setDoListNameUpdate(isEditForm.doListUpdate.des);
    } else {
      setDoListNameUpdate("");
    }
  }, [isEditForm.doListUpdate]);

  return (
    <>
      {isEditForm.status == false ? (
        <form
          className="d-flex justify-content-center
                        align-items-center mb-4"
        >
          <input
            type="text"
            id="form2"
            className="form-control"
            placeholder="Thêm công việc"
            value={doListName}
            onChange={(e) => {
              setDoListName(e.target.value)
            }}
          />
          <button
            type="submit"
            className="btn btn-info
                                    ms-2"
            onClick={() => {
              dispatch({
                type: "addNewDoList",
                newDoList: {
                  id: uuidv4(),
                  des: doListName,
                  did: false,
                },
              });
              setDoListName("");
            }}
          >
            Thêm
          </button>
        </form>
      ) : (
        <form
          className="d-flex justify-content-center
                        align-items-center mb-4"
        >
          <input
            type="text"
            id="form2"
            className="form-control"
            placeholder="Thêm công việc"
            value={doListNameUpdate}
            onChange={(e) => {
              setDoListNameUpdate(e.target.value)
            }}
          />
          <button
            type="submit"
            className="btn btn-info
                                    ms-2"
            onClick={() => {
              dispatch({
                type: "updateDoList",
                doListUpdate: {
                  id: isEditForm.doListUpdate.id,
                  des: doListNameUpdate,
                  did: false,
                },
              });
            }}
          >
            Lưu
          </button>
        </form>
      )}
    </>
  );
}
