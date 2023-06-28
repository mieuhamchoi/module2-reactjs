import { createSlice, createAction } from "@reduxjs/toolkit";

const miniSlice = createSlice(
    {
        name: "mini",
        initialState:  {
            count: 0
        },
        reducers: {
            increment: (state, action) => {
                console.log("đã vào increment")
                return {...state, count: state.count  + 1}
            },
            decrement: (state, action) => {
                console.log("đã vào decrement")
                return {...state, count: state.count  - 1}
            },
            setCount: (state, action) => {
                console.log("đã vào decrement")
                return {...state, count: action.payload}
            },
        }
    }
)
export const miniActions  = miniSlice.actions;
export default miniSlice.reducer