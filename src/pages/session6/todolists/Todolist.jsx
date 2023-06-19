import React, { createContext, useState, useReducer } from "react";
import "./Todolist.scss";
import EditTools from "./components/EditTools";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

// tạo ra context để cung cấp các dữ liệu
export const toDolistContext = createContext();

export default function Todolist() {
  // tạo state nhanh để quản lý trạng thái edit
  const [isEditForm, setIsEditForm] = useState(
    {
      status: false,
      doListUpdate: null
    }
  );

  function setDataEdit(status, doList) {
    setIsEditForm(
      {
        status: status,
        doListUpdate: doList
      }
    )
  }
  // khởi tạo state
  const initStateToDoList = [
    {
      id: 0,
      des: "Đi làm ở Rikkei",
      did: false,
    },
    {
      id: 1,
      des: "Học Java",
      did: true,
    },
  ];

  //function reducer
  function reducerTodolist(state, action) {
    switch (action.type) {
      case "addNewDoList":
        return [action.newDoList, ...state];
      case "updateDoList":
        setIsEditForm(
          {
            status: false,
            doListUpdate: null
          }
        )
        return state.map((doList) => {
          if (doList.id === action.doListUpdate.id) {
            return action.doListUpdate;
          }
          return doList;
        });
      case "deleteDoList":
        const updatedState = state.filter(
          (doList) => doList.id !== action.id
        );
        return updatedState;
      default:
        throw new Error();
    }
  }

  // tạo ra state và dispatch dùng useReducer
  const [state, dispatch] = useReducer(reducerTodolist, initStateToDoList);



  return (
    <toDolistContext.Provider value={{state, dispatch, isEditForm, setDataEdit}}>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
                    h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    MINI PROJECT TODO LIST
                  </h3>
                  <EditTools dispatch={dispatch}></EditTools>
                  {/* Tabs navs */}
                  <Navbar></Navbar>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <Content></Content>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </toDolistContext.Provider>
  );
}
