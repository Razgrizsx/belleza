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
      console.log("payload", filtered);
    }
  }
});

export default cartSlice.reducer;
export const { addProduct, deleteProduct } = cartSlice.actions;
