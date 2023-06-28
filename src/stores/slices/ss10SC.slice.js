import { createSlice } from "@reduxjs/toolkit";

const ss10SCSlice = createSlice({
  name: "ss10SC",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      let check = state.find((item) => item.productId === action.payload.productId);
      if (!check) {
        state.push(action.payload);
      } else {
        state.map((item) => {
          if (item.productId === action.payload.productId) {
            item.quantity += action.payload.quantity;
          }
          return item;
        });
      }
    },
    updateItemInCart: (state, action) => {
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return action.payload;
        }
        return item;
      });
    },
    deleteItemInCart: (state, action) => {
      return state.filter((item) => {
        return item.productId !== action.payload
      });
    },
  },
});

export const ss10SCActions = {
  ...ss10SCSlice.actions,
};

export default ss10SCSlice.reducer;
