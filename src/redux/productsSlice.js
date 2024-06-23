import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "@/services/apiService";

const initialState = {
  products: ["product"]
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
});

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    console.log("slice");
    const response = await getProducts();
    console.log("response", response.data);
    return response.data;
  }
);

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
