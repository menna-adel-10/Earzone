import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductType } from "../types";
import { stat } from "fs";

// Define a type for the slice state
interface CartState {
  cart: ProductType[];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload);
    },

    startNewCart: (state) => {
      state.cart.shift();
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, startNewCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;