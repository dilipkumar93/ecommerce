import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart(state, action) {
      const Index = state.carts.find((item) => item.id === action.payload.id);
      if (Index) {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.carts.push(action.payload);
      }
    },
    removeCart(state, action) {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },

    incrementProduct(state, action) {
      state.carts = state.carts.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementProduct(state, action) {
      state.carts = state.carts.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },

    clearCart(state) {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  removeCart,
  incrementProduct,
  decrementProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
