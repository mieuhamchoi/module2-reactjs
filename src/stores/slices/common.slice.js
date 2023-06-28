import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice(
    {
        name: "count",
        initialState: {reload: false},
        reducers: {
            reload: (state, action) => {
                console.log("state", state)
                return {...state, reload: !state.reload}
            },
        }
    }
)

export const commonActions =  {
    ...commonSlice.actions,
}

export default commonSlice.reducer;