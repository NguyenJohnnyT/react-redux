import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
    currentCategory: ''
  },
  reducers: {
    updateCategories: (state, action) => {
      state.value = [...action.categories]
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.currentCategory;
    }
  }
})

export default categorySlice.reducer;