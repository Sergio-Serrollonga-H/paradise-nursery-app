import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (!existingProduct) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.cartTotalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    manageProductQty: (state, action) => {
      const { productId, operation } = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        switch (operation) {
          case "add":
            existingProduct.quantity += 1;
            break;
          case "substract":
            existingProduct.quantity -= 1;
            if (existingProduct.quantity <= 0) {
              state.cartItems = state.cartItems.filter(
                (item) => item.id !== productId
              );
            }
            break;
        }

        state.cartTotalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );

        state.cartTotalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },

    deleteItem: (state, action) => {
      const itemToDelete = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemToDelete
      );

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.cartTotalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addProduct, manageProductQty, deleteItem } = cart.actions;

export default cart.reducer;
