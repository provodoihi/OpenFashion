import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://192.168.1.7:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getSelectedProduct = () => instance.get('/api/selectedProduct');
export const getMoreProducts = () => instance.get('/api/moreProducts');
