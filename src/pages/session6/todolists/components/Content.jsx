import React, { useContext } from "react";
// import context được provider
import { toDolistContext } from "../Todolist";
import { message, Modal } from "antd";
export default function Content() {
  // dùng useContext để đọc context
  const { state, dispatch, setDataEdit } = useContext(toDolistContext);

  function countLiveDoList() {
    let count = 0;
    for (let i in state) {
      if (!state[i].did) {
        count++;
      }
    }
    return count;
  }

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <span>
          <span style={{ color: "green" }}>
            Doing: {countLiveDoList(state)}
          </span>{" "}
          ||
          <span style={{ color: "blue" }}>
            {" "}
            Finish: {state.length - countLiveDoList(state)}
          </span>{" "}
          ||
          <span style={{ color: "red" }}> Total: {state.length} </span>
        </span>
        <ul className="list-group mb-0">
          {state
            .sort((a, b) => a.did - b.did)
            .map((item) => (
              <li
                className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                style={{ backgroundColor: "#f4f6f7" }}
                key={item.id}
              >
                <div>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultChecked={item.did}
                    onChange={(e) => {
                      dispatch({
                        type: "updateDoList",
                        doListUpdate: {
                          id: item.id,
                          des: item.des,
                          did: !item.did,
                        },
                      });
                    }}
                  />
                  {item.did ? <s>{item.des}</s> : item.des}
                </div>
                <div>
                  <a
                    onClick={() => {
                      if (item.did) {
                        message.info("Bạn đã hoàn thành công việc này");
                      } else {
                        setDataEdit(true, item);
                      }
                    }}
                    href="#!"
                    className="text-info"
                    title="Sửa công việc"
                  >
                    <i className="fas fa-pencil-alt me-3" />
                  </a>
                  <a
                    onClick={() => {
                      Modal.confirm({
                        title: "Xác nhận",
                        content: "Bạn muốn xóa công việc này?",
                        onOk() {
                          // Xử lý khi người dùng xác nhận
                          dispatch({ type: "deleteDoList", id: item.id });
                        },
                        onCancel() {
                          // Xử lý khi người dùng hủy bỏ
                        },
                      });
                    }}
                    href="#!"
                    className="text-danger"
                    title="Xóa công việc"
                  >
                    <i className="fas fa-trash-alt" />
                  </a>
                </div>
              </li>
            ))}
          {state.length == 0 ? <>Bạn chưa có kế hoạch nào</> : <></>}
        </ul>
      </div>
    </div>
  );
}
