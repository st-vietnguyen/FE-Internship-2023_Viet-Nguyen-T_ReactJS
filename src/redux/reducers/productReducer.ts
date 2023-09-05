import ProductModel from '../../app/models/product/product.entity';
import { ActionType } from '../../app/models/redux/action.interface';
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../types/productTypes';

export interface ProductsState {
  products: ProductModel[];
  isLoading: Boolean;
  err: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  err: '',
};

export const productReducer = (
  state = initialState,
  action: ActionType
): ProductsState => {
  const objReducer: Record<string, () => ProductsState> = {
    [GET_PRODUCTS_REQUEST]: () => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [GET_PRODUCTS_SUCCESS]: () => {
      return {
        ...state,
        products: action.payload.products,
        isLoading: false,
      };
    },
    [GET_PRODUCTS_FAILED]: () => {
      return {
        ...state,
        err: action.payload.err,
        isLoading: false,
      };
    },
  };
  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
