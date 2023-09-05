import { ProductProps } from '../../app/models/product/product.interface';
import { ActionType } from '../../app/models/redux/action.interface';
import * as TYPES from '../types/cartTypes';

export const addToCart = (product: ProductProps): ActionType => {
  return {
    type: TYPES.ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const changeQuantity = (productId: number, newQuantity: number) => {
  return {
    type: TYPES.CHANGE_QUANTITY_CART_ITEM,
    payload: {
      productId,
      newQuantity,
    },
  };
};

export const deleteCartItem = (id: number) => {
  return {
    type: TYPES.DELETE_CART_ITEM,
    payload: {
      id,
    },
  };
};
