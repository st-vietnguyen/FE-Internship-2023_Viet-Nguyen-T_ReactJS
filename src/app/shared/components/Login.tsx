import { useRef, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { User, login } from '../../../redux/actions/auth';
import { AppState } from '../../../redux/reducers/reducer';
import { modalContext } from '../../core/context/ModalContext';

const initStateErrValidate: User = {
  email: '',
  password: '',
};

const Login = () => {
  const [errorResponse, setErrorResponse] = useState('');
  const [errValidate, setErrValidate] = useState<User>(initStateErrValidate);

  const emailRef = useRef<any>(null);
  const pwRef = useRef<any>(null);

  const errState = useSelector((state: AppState) => state.auth.err);
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  const { isShow, setIsShow } = useContext(modalContext);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleLogin = () => {
    setErrorResponse('');
    if (validateLogin(emailRef.current.value, pwRef.current.value)) {
      dispatch(
        login({ email: emailRef.current.value, password: pwRef.current.value })
      );
    }
  };

  const validateLogin = (email: string, password: string) => {
    const mapErr: User = {
      email,
      password,
    };
    let check = true;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    for (const [key, value] of Object.entries(mapErr)) {
      if (value.trim() === '') {
        errValidate[key as keyof User] = `${key} is required !`;
        setErrValidate({ ...errValidate });
        check = false;
      } else if (key === 'password' && value.length < 6) {
        setErrValidate({
          ...errValidate,
          password: `Password must least 6 charactor !!`,
        });
        check = false;
      } else if (key === 'email' && !emailRegex.test(value)) {
        setErrValidate({
          ...errValidate,
          email: 'Email is incorrect !',
        });
        check = false;
      }
    }
    return check;
  };

  useEffect(() => {
    if (!isShow) {
      emailRef.current.value = '';
      pwRef.current.value = '';
      setErrorResponse('');
      setErrValidate(initStateErrValidate);
    }
  }, [isShow]);

  const handleInputBlur = (inputRef: any) => {
    inputRef.current.value = inputRef.current.value.trim();
  };

  useEffect(() => {
    if (errState) {
      setErrorResponse(errState);
    }
  }, [errState]);

  const handleInputFocus = (inputName: string) => {
    setErrorResponse('');
    errValidate[inputName as keyof User] = '';
    setErrValidate({ ...errValidate });
  };

  return (
    <div className="login">
      <h3 className="login-title">Sign In</h3>
      <span className="icon-close" onClick={() => setIsShow(!isShow)}>
        X
      </span>
      <div className="login-form">
        <label className="login-label" htmlFor="email-input">
          EMAIL
        </label>
        <input
          onFocus={() => handleInputFocus('email')}
          onBlur={() => handleInputBlur(emailRef)}
          ref={emailRef}
          type="text"
          className="login-input error"
          placeholder="Enter your email"
        />
        {errValidate.email && (
          <span className="err-text">{errValidate.email}</span>
        )}
        <label className="login-label" htmlFor="pw-input">
          PASSWORD
        </label>
        <input
          onFocus={() => handleInputFocus('password')}
          onBlur={() => handleInputBlur(pwRef)}
          ref={pwRef}
          type="password"
          className="login-input"
          placeholder="Password"
        />
        {errValidate.password && (
          <span className="err-text">{errValidate.password}</span>
        )}
        <button
          disabled={!!isLoading}
          onClick={handleLogin}
          className={`btn btn-primary ${isLoading ? 'disabled' : ''}`}>
          Login
        </button>
      </div>
      {errorResponse && <p className="err-text">*{errorResponse}</p>}
    </div>
  );
};

export default Login;
