import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromLocalStorage, saveToLocalStorage } from '../../helper';

interface WishlistItem {
  id: string;
  img: string;
  name: string;
  price: number;
  prevPrice: number;
  flash_sale: boolean;
  discount: boolean;
  quantity: number;
  star: string;
  span: string;
}

interface WishlistState {
  wishlist: WishlistItem[];
  isPresentWishlist: boolean;
  // wishlistCount: number;
}

const storedItem = getFromLocalStorage('wishlist');
const initialState: WishlistState = {
  wishlist: storedItem || [],
  isPresentWishlist: !!storedItem,
  // wishlistCount: 0,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addTowishlist(state, action: PayloadAction<WishlistItem>) {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
        // state.wishlistCount++;
        state.isPresentWishlist = true;
      }
      saveToLocalStorage('wishlist', state.wishlist);
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.wishlist = state.wishlist.filter(
        (wishlistItem) => wishlistItem.id !== action.payload
      );
      // state.wishlistCount--;
      state.isPresentWishlist = state.wishlist.length > 0; // update isPresentWishlist flag
      saveToLocalStorage('wishlist', state.wishlist);
    },
  },
});

export const { addTowishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
