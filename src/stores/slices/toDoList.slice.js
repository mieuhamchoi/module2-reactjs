import { createSlice } from "@reduxjs/toolkit";

const toDoListSlice = createSlice(
    {   
        name: "toDoList",
        initialState: [
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
        ],
        reducers: {
            addNewDo: (state, action) => {
                state.push(action.payload)
            },
            deleteDo: (state, action) => {
                return state.filter(doItem => doItem.id != action.payload)
            },
            updateDo: (state, action) => {
                return state.map(doItem => {
                    if (doItem.id == action.payload.id) {
                        return action.payload
                    }
                    return doItem
                })
            }
        }
    }
)

export const toDoListActions =  {
    ...toDoListSlice.actions,
}

export default toDoListSlice.reducer;