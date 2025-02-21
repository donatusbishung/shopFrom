import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsData } from '../../Data'; // Import the exported data

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  prevPrice?: number;
  best_selling?: boolean;
  isNew?: boolean;
  flashSale?: boolean;
  discount?: boolean;
  quantity: number;
  star?: string;
  span?: string;
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
    // Simulate an async operation (e.g., fetching from an API)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const allProducts = [
      ...productsData.game,
      ...productsData.clothing,
      ...productsData.food,
      ...productsData.utils,
    ];
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

export default productSlice.reducer;
