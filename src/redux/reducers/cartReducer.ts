import { CartItemModel } from '../../app/models/cart/cart';
import { ActionType } from '../../app/models/redux/action.interface';
import {
  StorageKey,
  getDataFromLocalStorage,
} from '../../app/shared/services/localStorage.service';
import {
  ADD_TO_CART,
  CHANGE_QUANTITY_CART_ITEM,
  DELETE_CART_ITEM,
} from '../types/cartTypes';
import { CartService } from '../../app/shared/services/cart.services';
export interface CartState {
  listCartItem: CartItemModel[];
}

const initialState: CartState = {
  listCartItem: getDataFromLocalStorage(StorageKey.CART),
};

export const cartReducer = (
  state = initialState,
  action: ActionType
): CartState => {
  const cartService = new CartService();
  const objReducer: Record<string, () => CartState> = {
    [ADD_TO_CART]: () => {
      const newCart = cartService.addToCart(
        state.listCartItem,
        action.payload.product
      );
      return {
        ...state,
        listCartItem: [...newCart],
      };
    },
    [CHANGE_QUANTITY_CART_ITEM]: () => {
      const newCart = cartService.changeQuantity(
        state.listCartItem,
        action.payload.productId,
        action.payload.newQuantity
      );
      return {
        ...state,
        listCartItem: [...newCart],
      };
    },
    [DELETE_CART_ITEM]: () => {
      const newCart = cartService.deleteProduct(
        state.listCartItem,
        action.payload.id
      );
      return {
        ...state,
        listCartItem: [...newCart],
      };
    },
  };
  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
