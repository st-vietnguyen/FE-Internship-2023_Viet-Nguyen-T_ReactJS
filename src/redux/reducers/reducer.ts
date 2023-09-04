import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';

export type AppState = ReturnType<typeof reducer>;

export const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});
