import { ProductProps } from '../../app/models/product/product.interface';
import { ActionType } from '../../app/models/redux/action.interface';
import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_CART_ITEM,
  TOTAL_PRODUCT,
} from '../types/cartTypes';

export const addToCart = (product: ProductProps): ActionType => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const changeQuantity = (product: ProductProps, newQuantity: number) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      product,
      newQuantity,
    },
  };
};

export const deleteProduct = (id: number) => {
  return {
    type: DELETE_CART_ITEM,
    payload: {
      id,
    },
  };
};

export const totalProduct = () => {
  return {
    type: TOTAL_PRODUCT,
  };
};
