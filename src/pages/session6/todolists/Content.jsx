import React, {useContext} from "react";
// import context được provider
import {toDolistContext} from "./Todolist";

export default function Content() {

  // dùng useContext để đọc context 
  const {state, dispatch, setDataEdit} = useContext(toDolistContext);

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {state.map((item) => (
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
                <a onClick={() => {
                  setDataEdit(true, item)
                }} href="#!" className="text-info" title="Sửa công việc">
                  <i className="fas fa-pencil-alt me-3" />
                </a>
                <a onClick={() => {
                  dispatch({type: "deleteDoList", id: item.id})
                }} href="#!" className="text-danger" title="Xóa công việc">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
