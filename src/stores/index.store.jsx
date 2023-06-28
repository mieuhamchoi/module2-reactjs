import {createReducer, configureStore, createAction, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';
/* createAction để tạo ra một actions
    1/ createAction là một function
    2/ đối số nhận vào là string (type của actions)
*/
export const incrementCount = createAction('incrementCount');
export const setCount = createAction('setCount');

/* createReducer để tạo ra reducer function và nó là một function nhận vào hai đối số: 
    1/ initState
    2/ object có mỗi phần tử là action. (gọi là object action)
*/
const initState = 2;
const countReducer = createReducer(
    initState,
    {
        incrementCount: (state, action) => state + 1,
        decrementCount: (state, action) => state--,
        setCount: (state, action) => state = action.payload,
    }
)

/* configureStore để tạo store và thêm các config
    1/ đối số đầu tiên là một object có 1 phần tử là reducer object, 
    mỗi phần tử của reducer object là một reducer function
*/
const store = configureStore({
    reducer: {
        countStore: countReducer,
    },
});

  
  

export default store;