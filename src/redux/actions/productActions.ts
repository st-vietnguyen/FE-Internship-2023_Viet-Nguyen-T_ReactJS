import { ProductProps } from '../../app/models/product/product.interface';
import { SET_PRODUCTS } from '../types/productTypes';

export const setProducts = (products: ProductProps[]) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    },
  };
};
