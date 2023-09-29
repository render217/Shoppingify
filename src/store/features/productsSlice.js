import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { postProduct } from '../../api';
const initialState = {
  status: 'idle',
  error: null,
  data: [],
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(createProduct.pending, (state) => {})
      .addCase(createProduct.fulfilled, (state, action) => {
        const categoryExist = state.data.find(
          (item) => item.categoryName === action.payload.data.product.category,
        );
        if (categoryExist) {
          state.data = state.data.map((item) =>
            item.categoryName === action.payload.data.product.category
              ? {
                  ...item,
                  products: item.products.concat(action.payload.data.product),
                }
              : item,
          );
        } else {
          state.data = state.data.concat({
            categoryName: action.payload.data.product.category,
            products: [{ ...action.payload.data.product }],
          });
        }
      })
      .addCase(createProduct.rejected, (state, action) => {});
  },
});

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'http://localhost:3500/api/v1/products/category',
      );
      console.log(data);
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || 'Something went wrong',
      );
    }
  },
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (formData, thunkAPI) => {
    

    try {
      const { data } = await postProduct(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || 'Unable to create product',
      );
    }
  },
);

export const productsAction = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const selectProductsData = (state) => state.products.data;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
