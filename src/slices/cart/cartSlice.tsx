import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromLocalStorage, saveToLocalStorage } from '../../helper';

interface CartItem {
  id: string;
  img: string;
  name: string;
  price: number;
  prevPrice: number;
  flashSale: boolean;
  discount: boolean;
  quantity: number;
  star: string;
  span: string;
}

interface CartState {
  cart: CartItem[];
  isPresent: boolean;
  cartCount: number;
}

const storedItem = getFromLocalStorage('cart');
const initialState: CartState = {
  cart: storedItem || [],
  isPresent: !!storedItem,
  cartCount: storedItem ? storedItem.length : 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cart.push(action.payload);
        state.cartCount++;
        state.isPresent = true;
      }
      saveToLocalStorage('cart', state.cart);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.cartCount--;
      state.isPresent = state.cart.length > 0; // update isPresent flag
      saveToLocalStorage('cart', state.cart);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveToLocalStorage('cart', state.cart);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
