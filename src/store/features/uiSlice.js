import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
  showCartBackdrop: false,
  selectedProduct: null,

  cartIsEdit: false,
  IsCarttobeSubmit: false,

  showCartForm: false,
  showProductPreview: false,
  showCartList: false,
  showCartEditForm: false,
  showCartList: true,
};
export const uiSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCarttobeSubmit: (state, action) => {
      state.IsCarttobeSubmit = action.payload;
    },
    setCartIsEdit: (state, action) => {
      state.cartIsEdit = action.payload;
    },
    resetCartStatus: (state, action) => {
      console.log('ui cart status called');
      state.cartIsEdit = false;
      state.IsCarttobeSubmit = false;
      console.log(state.cartIsEdit,state.IsCarttobeSubmit)
    },
    toggleCartIsEdit: (state, action) => {
      state.cartIsEdit = !state.cartIsEdit;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    toggleCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartBackdrop: (state, action) => {
      state.showCartBackdrop = action.payload;
    },
    setShowCartForm: (state, action) => {
      state.showCartList = false;
      state.showProductPreview = false;
      state.showCartForm = true;
    },
    setShowCartList: (state, action) => {
      state.showCartList = true;
    },
    setShowProductPreview: (state) => {
      state.showProductPreview = true;
      state.showCartList = false;
      state.showCartForm = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

export const selectShowCart = (state) => state.UI.showCart;
export const selectBackdrop = (state) => state.UI.showCartBackdrop;

export const selectSelectedProductPreview = (state) => state.UI.selectedProduct;

export const selectshowCartForm = (state) => state.UI.showCartForm;
export const selectshowProductPreview = (state) => state.UI.showProductPreview;
export const selectShowCartList = (state) => state.UI.showCartList;

export const selectIsCartEdit = (state) => state.UI.cartIsEdit;
export const selectIsCartTobeSubmit = (state) => state.UI.IsCarttobeSubmit;
