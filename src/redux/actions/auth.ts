import {
  StorageKey,
  saveDataToLocalStorage,
} from '../../app/shared/services/localStorage.service';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types/auth';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailed = (err: any) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      err,
    },
  };
};

export const login =
  (username: string, password: string) => async (dispatch: any) => {
    dispatch(loginRequest());

    setTimeout(async () => {
      try {
        const response = await fetch('user.json');
        const data = await response.json();

        const user = data.find((item: any) => {
          return item.username === username && item.password === password;
        });
        if (user) {
          saveDataToLocalStorage(StorageKey.USER, user);
          dispatch(loginSuccess());
        } else {
          dispatch(
            loginFailed(
              'Username or Password is incorrect , Please try again!!'
            )
          );
        }
      } catch (err) {
        dispatch(loginFailed(err));
      }
    }, 2000);
  };
