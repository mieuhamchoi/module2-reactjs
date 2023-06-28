import React, { useEffect } from "react";
import { message, Modal } from "antd";

export default function Content(props) {
  function countLiveDoList() {
    let count = 0;
    for (let i in props.doList) {
      if (!props.doList[i].did) {
        count++;
      }
    }
    return count;
  }

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <span>
          <span style={{ color: "green" }}>Doing: {countLiveDoList()}</span> ||
          <span style={{ color: "blue" }}>
            {" "}
            Finish: {props.doList.length - countLiveDoList()}
          </span>{" "}
          ||
          <span style={{ color: "red" }}> Total: {props.doList.length} </span>
        </span>
        <ul className="list-group mb-0">
          {props.doList
            .slice() // Clone the array
            .sort((a, b) =>  a.did - b.did)
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
                    onChange={() =>
                      props.dispatch(
                        props.updateDo({ ...item, did: !item.did })
                      )
                    }
                  />
                  {item.did ? <s>{item.des}</s> : item.des}
                </div>
                <div>
                  <a
                    onClick={() => {
                      if (item.did) {
                        message.info("Bạn đã hoàn thành công việc này");
                      } else {
                        props.setDataEdit(true, item);
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
                          props.dispatch(props.deleteDo(item.id));
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
          {props.doList.length == 0 ? <>Bạn chưa có kế hoạch nào</> : <></>}
        </ul>
      </div>
    </div>
  );
}
