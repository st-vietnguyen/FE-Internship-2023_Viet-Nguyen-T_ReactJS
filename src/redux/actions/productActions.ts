import ProductModel from '../../app/models/product/product.entity';
import { ProductProps } from '../../app/models/product/product.interface';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from '../types/productTypes';

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccess = (products: ProductProps[]) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
};

export const getProductsFailed = (err: any) => {
  return {
    type: GET_PRODUCTS_FAILED,
    payload: {
      err: err,
    },
  };
};

export const fetchProducts = () => async (dispatch: any) => {
  dispatch(getProductsRequest());
  const mapErr = ['data.json', 'data.json', 'err.json', 'data.json'];
  setTimeout(async () => {
    try {
      const response = await fetch(mapErr[Math.floor(Math.random() * 4)]);
      const data = await response.json();
      const productList = data.map(
        (item: ProductModel) => new ProductModel(item)
      );
      dispatch(getProductsSuccess(productList));
    } catch (err) {
      dispatch(getProductsFailed(err));
    }
  }, 2000);
};
