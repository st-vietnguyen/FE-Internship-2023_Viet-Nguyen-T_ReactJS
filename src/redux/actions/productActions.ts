import { GET_PRODUCTS } from '../types/productTypes';

export const getProducts = (products: any) => {
  return {
    type: GET_PRODUCTS,
    payload: {
      products,
    },
  };
};

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    dispatch(getProducts(data));
  } catch (err) {}
};
