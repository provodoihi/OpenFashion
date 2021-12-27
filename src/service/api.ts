import axios from 'axios';
import {API_ROUTE, API_ROOT} from '../constants';
export const instance = axios.create({
  baseURL: API_ROOT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getSelectedProduct = () =>
  instance.get(API_ROUTE.SELECTED_PRODUCT_DETAIL);
export const getMoreProducts = () => instance.get(API_ROUTE.MORE_PRODUCTS);
