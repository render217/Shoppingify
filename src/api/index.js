import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3500/api/v1',
});

export const fetchProducts = () => apiClient.get('/products/category');
export const postProduct = (data) => apiClient.post('/products', data);

export const postCart = (data) => apiClient.post('/cart', data);
export const fetchCartHistory = () => apiClient.get('/cart');
export const fetchSingleCartHistory = (id) => apiClient.get(`/cart/${id}`);
