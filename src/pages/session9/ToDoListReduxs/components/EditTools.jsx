import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { randomId } from '@mieuteacher/meomeojs'
export default function EditTools(props) {

  const [doListName, setDoListName] = useState("");
  const [doListNameUpdate, setDoListNameUpdate] = useState("");

  useEffect(() => {
    if (props.isEditForm.doListUpdate) {
      setDoListNameUpdate(props.isEditForm.doListUpdate.des);
    } else {
      setDoListNameUpdate("");
    }
  }, [props.isEditForm.doListUpdate]);

  return (
    <>
      {props.isEditForm.status == false ? (
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
                  props.dispatch(
                    props.addNewDo({
                      id: randomId(),
                      des: doListName,
                      did: false,
                    })
                  );
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
                  props.dispatch(
                    props.updateDo({
                      ...props.isEditForm.doListUpdate,
                      des: doListNameUpdate,
                    })
                  );

                  props.setIsEditForm({
                    status: false,
                    doListUpdate: null,
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
