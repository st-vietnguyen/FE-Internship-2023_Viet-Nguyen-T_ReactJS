import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types/auth';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user: User) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
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

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (userData: User) => async (dispatch: any) => {
  dispatch(loginRequest());

  setTimeout(async () => {
    try {
      const response = await fetch('user.json');
      const data = await response.json();

      const user = data.find((item: any) => {
        return (
          item.email === userData.email && item.password === userData.password
        );
      });
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(
          loginFailed('Email or Password is incorrect , Please try again!!')
        );
      }
    } catch (err) {
      dispatch(loginFailed(err));
    }
  }, 2000);
};

export interface User {
  email: string;
  password: string;
}
