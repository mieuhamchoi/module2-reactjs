import React, { useState, useContext, useEffect } from "react";

// import context được provider
import { toDolistContext } from "../Todolist";
import { Modal } from "antd";
import MeoMeoJs from '@mieuteacher/meomeojs'
export default function EditTools() {
  // dùng useContext để đọc context
  const { state, dispatch, isEditForm } = useContext(toDolistContext);

  const [doListName, setDoListName] = useState("");
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
              setDoListName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn btn-info
                                    ms-2"
            onClick={(e) => {
              e.preventDefault();
              Modal.confirm({
                title: "Xác nhận",
                content: "Bạn xác nhận thêm mới?",
                onOk() {
                  // Xử lý khi người dùng xác nhận
                  dispatch({
                    type: "addNewDoList",
                    newDoList: {
                      id: MeoMeoJs.uuidv4(),
                      des: doListName,
                      did: false,
                    },
                  });
                  setDoListName("");
                },
                onCancel() {
                  // Xử lý khi người dùng hủy bỏ
                },
              });
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
              setDoListNameUpdate(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn btn-info
                                    ms-2"
            onClick={(e) => {
              e.preventDefault();
              Modal.confirm({
                title: "Xác nhận",
                content: "Bạn xác nhận cập nhật?",
                onOk() {
                  // Xử lý khi người dùng xác nhận
                  dispatch({
                    type: "updateDoList",
                    doListUpdate: {
                      id: isEditForm.doListUpdate.id,
                      des: doListNameUpdate,
                      did: false,
                    },
                  });
                },
                onCancel() {
                  // Xử lý khi người dùng hủy bỏ
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
