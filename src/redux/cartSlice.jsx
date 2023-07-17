import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, category } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.totalPrice += price;
      } else {
        state.items.push({
          id,
          title,
          price,
          category,
        });
        state.totalPrice += price;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === itemId);

      if (existingItemIndex !== -1) {
        state.totalPrice -= state.items[existingItemIndex].price;
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
