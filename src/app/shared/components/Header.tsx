import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import { AppState } from '../../../redux/reducers/reducer';
import { CartService } from '../services/cart.services';
import Login from './Login';
import { modalContext } from '../../context/ModalContext';
import {
  StorageKey,
  getDataFromLocalStorage,
} from '../services/localStorage.service';
import { logOut } from '../../../redux/actions/auth';

const Header = () => {
  const location = useLocation();
  const cartService = new CartService();
  const navigate = useNavigate();
  const cartQuantity = useSelector((state: AppState) =>
    cartService.calcTotalProduct(state.cart.listCartItem)
  );
  const dispatch = useDispatch();
  const user = getDataFromLocalStorage(StorageKey.USER);
  const { isShow, setIsShow } = useContext(modalContext);
  const isLogin = useSelector((state: AppState) => state.auth.isLogin);
  const checkLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isLogin) {
      navigate('/cart');
    } else {
      setIsShow(!isShow);
    }
  };
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <header
      className={`header ${
        location.pathname.includes('cart') && 'header-cart-page'
      }`}>
      <div className="container">
        <div className="wrapper">
          <h1 className="logo">
            <Link to="/" className="logo-link">
              <img
                src={'assets/images/Logo.png'}
                alt="E-Shop"
                className="logo-image"
              />
            </Link>
          </h1>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Kids
                </a>
              </li>
            </ul>
          </nav>
          <ul className="actions">
            <li className="action-item">
              <i className="icon icon-search"></i>
            </li>
            <li className="action-item">
              <Link className="action-link" to="/cart" onClick={checkLogin}>
                {isLogin && cartQuantity > 0 && (
                  <div className="cart-quantity">{cartQuantity}</div>
                )}
                <i className="icon icon-cart"></i>
              </Link>
            </li>
            {!isLogin ? (
              <li className="action-item">
                <i className="icon icon-user"></i>
              </li>
            ) : (
              <li className="action-item">
                <span className="hi-text">Hi : {user.username}</span>
                <i className="icon icon-logout" onClick={handleLogOut}></i>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Login />
    </header>
  );
};

export default Header;
