import { ProductProps } from '../../app/models/product/product.interface';
import { ActionType } from '../../app/models/redux/action.interface';
import { SET_PRODUCTS } from '../types/productTypes';

export interface ProductsState {
  products: ProductProps[];
}

const initialState: ProductsState = {
  products: [],
};

export const productReducer = (
  state = initialState,
  action: ActionType
): ProductsState => {
  const objReducer: Record<string, () => ProductsState> = {
    [SET_PRODUCTS]: () => {
      return {
        ...state,
        products: action.payload.products,
      };
    },
  };
  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
