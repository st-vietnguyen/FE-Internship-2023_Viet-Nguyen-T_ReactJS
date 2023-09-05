import { SET_PRODUCTS } from '../types/productTypes';

export const setProducts = (products: any) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    },
  };
};

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    dispatch(setProducts(data));
  } catch (err) {}
};
