import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/productsSlice';
import { uiReducer } from './features/uiSlice';
import { cartReducer } from './features/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    UI: uiReducer,
  },
});
