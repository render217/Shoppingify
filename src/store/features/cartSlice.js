import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  cartProducts: [],
  cartListName: '',
  cartStatus: '',
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartListName: (state, action) => {
      state.cartListName = action.payload;
    },
    resetCart: (state, action) => {
      state.cartListName = '';
      state.cartStatus = '';
      state.error = null;
      state.status = 'idle';
      state.cartProducts = [];
    },
    addToCart: (state, action) => {
      console.log(action.payload.category);
      const categoryExist = state.cartProducts.find(
        (item) => item.categoryName === action.payload.category,
      );
      if (categoryExist) {
        console.log('catgory exist');
        const targetIndex = categoryExist.products.findIndex(
          (item) => item._id === action.payload._id,
        );
        if (targetIndex !== -1) {
          const updatedProduct = {
            ...categoryExist.products[targetIndex],
            quantity: categoryExist.products[targetIndex].quantity + 1,
          };
          categoryExist.products[targetIndex] = updatedProduct;
        } else {
          const updatedProduct = {
            ...action.payload,
            quantity: 1,
          };
          categoryExist.products.push(updatedProduct);
        }
      } else {
        state.cartProducts.push({
          categoryName: action.payload.category,
          products: [{ ...action.payload, quantity: 1 }],
        });
      }
    },
    removeFromCart: (state, action) => {
      const targetCategoryIndex = state.cartProducts.findIndex(
        (item) => item.categoryName === action.payload.category,
      );
      const targetProductIndex = state.cartProducts[
        targetCategoryIndex
      ].products.findIndex((item) => item._id === action.payload._id);

      if (
        state.cartProducts[targetCategoryIndex].products[targetProductIndex]
          .quantity === 1
      ) {
        //
        state.cartProducts[targetCategoryIndex].products = state.cartProducts[
          targetCategoryIndex
        ].products.filter((item) => item._id !== action.payload._id);

        if (state.cartProducts[targetCategoryIndex].products.length === 0) {
          state.cartProducts.splice(targetCategoryIndex, 1);
        }
      } else {
        state.cartProducts[targetCategoryIndex].products[targetProductIndex] = {
          ...state.cartProducts[targetCategoryIndex].products[
            targetProductIndex
          ],
          quantity:
            state.cartProducts[targetCategoryIndex].products[targetProductIndex]
              .quantity - 1,
        };
      }
    },
    clearProductFromCart: (state, action) => {
      const targetCategoryIndex = state.cartProducts.findIndex(
        (item) => item.categoryName === action.payload.category,
      );
      const updatedProductList = state.cartProducts[
        targetCategoryIndex
      ].products.filter((item) => item._id !== action.payload._id);
      state.cartProducts[targetCategoryIndex].products = updatedProductList;
      if (state.cartProducts[targetCategoryIndex].products.length === 0) {
        state.cartProducts.splice(targetCategoryIndex);
      }
    },
  },
  extraReducers: (builder) => {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export const selectCartListName = (state) => state.cart.cartListName;
