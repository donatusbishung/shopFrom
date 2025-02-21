import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

// Async thunk to fetch all products from Firestore
const productsCollection = collection(db, 'products');
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getDocs(productsCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    return filteredData;
  }
);

const dbSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Array to hold all products
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Store all fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dbSlice.reducer;
