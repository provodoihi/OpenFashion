import axios from 'axios'
export const instance = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getSelectedProduct = () => instance.get('/api/selectedProduct')
export const getMoreProducts = () => instance.get('/api/moreProducts')
