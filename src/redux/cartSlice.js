import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],               // [{ product, quantity }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find(i => i.product.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.product.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.product.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// SELECTORS
export const selectCartItems   = state => state.cart.items;
export const selectCartCount   = state =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartTotal   = state =>
  state.cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

export default cartSlice.reducer;
