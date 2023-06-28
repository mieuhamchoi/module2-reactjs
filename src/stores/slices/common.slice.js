import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice(
    {
        name: "count",
        initialState: {reload: false},
        reducers: {
            reload: (state, action) => state = !state,
        }
    }
)

export const commonActions =  {
    ...commonSlice.actions,
}

export default commonSlice.reducer;