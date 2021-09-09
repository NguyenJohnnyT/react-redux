// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer'
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer
  }
});