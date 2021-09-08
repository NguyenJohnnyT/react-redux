import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
  },
  reducers: {
    updateProducts: {
      reducer (state,action) {
      state.value = [...action.products];
    },
      prepare (products) {
        if (products) {
          var productList = products
        } else {
          var productList = []
        }
        return {
          payload: productList
        }
      },
    },
  },
})

export const { updateProducts } = productSlice.actions;
export const selectProducts = state => state.products.value;
export default productSlice.reducer;