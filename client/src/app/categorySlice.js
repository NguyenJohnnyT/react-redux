import { createSlice } from '@reduxjs/toolkit'

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
        let categoriesList;
        if (categories) {
          categoriesList = categories
        } else {categoriesList = []};
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

export const { updateCategories, updateCurrentCategory } = categorySlice.actions;
export const selectCurrentCategory = state => state.categories.currentCategory;
export const selectCategories = state => state.categories.value;
export default categorySlice.reducer;