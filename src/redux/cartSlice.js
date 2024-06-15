import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: ["Hola"]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    }
  }
});

export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;
