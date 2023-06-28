import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice(
    {
        name: "count",
        initialState: 0,
        reducers: {
            increment: (state, action) => state + 1,
            decrement: (state, action) => state - 1,
        }
    }
)

export const countActions =  {
    ...countSlice.actions,
}

export default countSlice.reducer;