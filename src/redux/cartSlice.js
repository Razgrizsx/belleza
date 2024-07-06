import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const filtered = state.products.filter(
        (elem) => elem.id !== action.payload
      );
      state.products = filtered;
    },
    changeQuantity: (state, action) => {
      const filtered = state.products.find(
        (elem) => elem.id === action.payload[0].id
      );
      if (action.payload[1] === "plus") {
        filtered.quantity = filtered.quantity + 1;
      } else {
        filtered.quantity = filtered.quantity - 1;
      }

      console.log(filtered, state.products);
    }
  }
});

export default cartSlice.reducer;
export const { addProduct, deleteProduct, changeQuantity } = cartSlice.actions;
