import React, { useReducer } from 'react'
import "./TaskKeeper.scss"
import NewTaskForm from './components/NewTaskForm'
import TaskTable from './components/TaskTable'

export default function TaskKeeper() {
    // khởi tạo state
    const initState = [];
    
    // khởi tạo reducer function 
    function reducerCount(state, action) {
        switch (action.type) {
            case 'addTask':
                return [...state, action.newTask];
            case 'deleteTask':
                const updatedState = state.filter(task => task.taskId !== action.taskId);
                return updatedState;
            default:
                throw new Error();
        }
    }
    
    // Dùng 2 nguyên liệu State và Redeucer function kết hợp useReducer tạo ra state reducer
    const [state, dispatch] = useReducer(reducerCount, initState);
  return (
    <>
        <div>
            <h1 style={{width: "100%", textAlign: "center"}}>Task Keeper</h1>
        </div>
        <div className='taskKeeper__container'>
            <div className='contents'>
                <NewTaskForm handleAddTask={dispatch}></NewTaskForm>
                <TaskTable handleDeleteTask={dispatch} taskList={state}></TaskTable>
            </div>
        </div>
    </>
  )
}
