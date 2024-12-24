import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  prevPrice: number;
  best_selling: boolean;
  isNew: boolean;
  flashSale: boolean;
  discount: boolean;
  quantity: number;
  star: string;
  span: string;
}

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  isLoading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('data/data.json');
    const data = await response.json();
    const allProducts = [
      ...data.game,
      ...data.clothing,
      ...data.food,
      ...data.utils,
    ];
    // console.log(allProducts);
    return allProducts;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
