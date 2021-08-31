import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
  },
  reducers: {
    updateProducts(state,action) {
      state.value = [...action.products];
    }
  }
})

export default productSlice.reducer;