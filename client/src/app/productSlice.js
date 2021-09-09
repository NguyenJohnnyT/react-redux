import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: []
  },
  reducers: {
    updateProducts: {
      reducer (state, action) {
        state.value = [...action.payload];
      },
      prepare (products) {
        let productList
        if (products) {
          productList = products
        } else {
          productList = []
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