import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../slices/cart/cartSlice';
import { wishlistSlice } from '../slices/wishlist/wishlistSlice';
import productSlice from '../slices/product/productSlice';
import authSlice from '../slices/Auth/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    products: productSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
