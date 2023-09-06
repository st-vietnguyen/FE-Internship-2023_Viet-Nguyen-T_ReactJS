import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { authReducer } from './auth';

export type AppState = ReturnType<typeof reducer>;

export const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  auth: authReducer,
});
