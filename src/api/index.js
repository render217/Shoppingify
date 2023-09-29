import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3500/api/v1/products',
});

export const fetchProducts = () => apiClient.get('/category');
export const postProduct = (data) => apiClient.post('/', data);
