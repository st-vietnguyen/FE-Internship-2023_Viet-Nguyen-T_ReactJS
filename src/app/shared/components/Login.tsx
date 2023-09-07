import { useRef, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../../redux/actions/auth';
import { AppState } from '../../../redux/reducers/reducer';
import { modalContext } from '../../context/ModalContext';

const Login = () => {
  const userNameRef = useRef<any>(null);
  const pwRef = useRef<any>(null);
  const dispatch = useDispatch<any>();
  const [error, setError] = useState('');
  const err = useSelector((state: AppState) => state.auth.err);
  const { isShow, setIsShow } = useContext(modalContext);
  const isLogin = useSelector((state: AppState) => state.auth.isLogin);
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  const handleLogin = () => {
    if (validateLogin(userNameRef.current.value, pwRef.current.value)) {
      dispatch(login(userNameRef.current.value, pwRef.current.value));
    }
  };
  const validateLogin = (username: string, password: string) => {
    const mapErr = {
      username,
      password,
    };
    for (const [key, value] of Object.entries(mapErr)) {
      if (value.trim() === '') {
        setError(`${key} is required !`);
        return 0;
      } else if (key === 'password' && value.length < 6) {
        setError(`${key} must least 6 charactor !!`);
        return 0;
      }
    }
    return 1;
  };
  useEffect(() => {
    if (err) {
      setError(err);
    }
  }, [err]);
  useEffect(() => {
    if (isLogin) {
      setIsShow(!isShow);
    }
  }, [isLogin]);
  useEffect(() => {
    if (!isShow) {
      userNameRef.current.value = '';
      pwRef.current.value = '';
      setError('');
    }
  }, [isShow]);
  return (
    <div className={`modal-wrapper ${!isShow ? 'hide' : ''}`}>
      <div className="overlay" onClick={() => setIsShow(!isShow)}></div>
      <div className="modal">
        <div className="login">
          <h3 className="login-title">Sign In</h3>
          <span className="icon-close" onClick={() => setIsShow(!isShow)}>
            X
          </span>
          <div className="login-form">
            <label className="login-label" htmlFor="username-input">
              USERNAME
            </label>
            <input
              ref={userNameRef}
              type="text"
              className="login-input error"
              placeholder="Enter your username"
            />
            <label className="login-label" htmlFor="pw-input">
              PASSWORD
            </label>
            <input
              ref={pwRef}
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <button
              disabled={!!isLoading}
              onClick={handleLogin}
              className={`btn btn-primary ${isLoading ? 'disabled' : ''}`}>
              Login
            </button>
          </div>
          {error && <p className="err-text">*{error}</p>}
          <div className="login-footer">
            <div className="remember-wrapper">
              <input type="checkbox" className="remember-check" />
              <span className="remember-text">Remember Me</span>
            </div>
            <Link to="/" className="forgot-pw-link">
              <span className="forgot-pw-text">Forgot Password</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
