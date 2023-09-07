import { ActionType } from '../../app/models/redux/action.interface';
import {
  StorageKey,
  getDataFromLocalStorage,
} from '../../app/shared/services/localStorage.service';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export interface AuthState {
  isLogin: boolean;
  err: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLogin:
    getDataFromLocalStorage(StorageKey.USER) &&
    getDataFromLocalStorage(StorageKey.USER).length !== 0
      ? true
      : false,
  err: '',
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: ActionType
): AuthState => {
  const objReducer: Record<string, () => AuthState> = {
    [LOGIN_REQUEST]: () => {
      return {
        ...state,
        err: '',
        isLoading: true,
      };
    },
    [LOGIN_SUCCESS]: () => {
      return {
        ...state,
        err: '',
        isLoading: false,
        isLogin: true,
      };
    },
    [LOGIN_FAILED]: () => {
      return {
        ...state,
        err: action.payload.err,
        isLoading: false,
        isLogin: false,
      };
    },
    [LOGOUT]: () => {
      return {
        ...state,
        err: '',
        isLoading: false,
        isLogin: false,
      };
    },
  };
  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
