import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewDo,
  deleteDo,
  updateDo,
} from "../../../stores-redux/toDoListStores/toDoList.action";

import "../../session6/todolists/Todolist.scss";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import EditTool from "./components/EditTools";

export default function ToDoListRedux() {
  // tạo state nhanh để quản lý trạng thái edit
  const [isEditForm, setIsEditForm] = useState({
    status: false,
    doListUpdate: null,
  });

  function setDataEdit(status, doList) {
    setIsEditForm({
      status: status,
      doListUpdate: doList,
    });
  }

  const dispatch = useDispatch();
  const toDoListStore = useSelector((state) => state.toDoListStore);

  return (
    <section className="vh-70 gradient-custom">
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
                <EditTool
                  dispatch={dispatch}
                  addNewDo={addNewDo}
                  updateDo={updateDo}
                  isEditForm={isEditForm}
                  setIsEditForm={setIsEditForm}
                ></EditTool>
                {/* Tabs navs */}
                <Navbar></Navbar>
                {/* Tabs navs */}
                {/* Tabs content */}
                <Content
                  doList={toDoListStore}
                  dispatch={dispatch}
                  deleteDo={deleteDo}
                  updateDo={updateDo}
                  setDataEdit={setDataEdit}
                ></Content>
                {/* Tabs content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
