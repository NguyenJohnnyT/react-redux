import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
    currentCategory: ''
  },
  reducers: {
    updateCategories: {
      reducer (state, action) {
      state.value = [...action.payload]
      },
      prepare (categories) {
        if (categories) {
          var categoriesList = categories
        } else {var categoriesList = []};
        return {
          payload: categoriesList
        }
     },
    },
    updateCurrentCategory: {
      reducer (state, action) {
        state.currentCategory = action.payload;
      },
      prepare (currentCategory) {
        return {
          payload: currentCategory
        };
      },
    },
  },
});

export default categorySlice.reducer;