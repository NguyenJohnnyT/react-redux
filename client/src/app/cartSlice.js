import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
    cartOpen: false
  },
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.cartOpen = true;
        state.value = [...state.value, action.payload];
      },
      prepare(products) {
        return {
            payload: products
        }
      }
    },

    addMultipleToCart: {
      reducer (state, action) {
        state.value = [...state.value, ...action.payload];
      },
      prepare (products) {
        return {
          payload: products 
        }
      },
    },

    updateCartQty: {
      reducer (state, action) {
        state.cartOpen = true;
        state.value = state.value.map(product => {
          if (action.payload._id === product._id) {
            product.purchaseQuantity = action.payload.purchaseQuantity
          }
          return product
        })
      },
      prepare(_id, purchaseQuantity) {
        return {
          payload: {
            _id,
            purchaseQuantity
          }
        };
      },
    },

    removeFromCart: {
      reducer (state,action) {
        state.value = state.value.filter( product => {
          return product._id !== action.payload;
        });
        state.cartOpen = state.value.length > 0;
      },
      prepare(_id) {
        return {
          payload: _id
        };
      },
    },

    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },

    clearCart: (state) => {
      state.value = [];
      state.cartOpen = false;
    }
  }
})

export const { addToCart, addMultipleToCart, updateCartQty, removeFromCart, toggleCart, clearCart } = cartSlice.actions;
export const selectIsCartOpen = state => state.cart.cartOpen;
export const selectCartItems = state => state.cart.value;
export default cartSlice.reducer;