import { useLocation, Link } from 'react-router-dom';
import Cart, { CartItemModel } from '../../models/cart/cart';
import { CartService } from '../services/cart.services';

interface headerProps {
  cart: CartItemModel[];
}
const Header = ({ cart }: headerProps) => {
  const cartService = new CartService();
  const location = useLocation();

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
                src={require('../../../assets/images/Logo.png')}
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
              <Link className="action-link" to="/cart">
                {cartService.calcTotalProduct(cart) > 0 && (
                  <div className="cart-quantity">
                    {cartService.calcTotalProduct(cart)}
                  </div>
                )}
                <i className="icon icon-cart"></i>
              </Link>
            </li>
            <li className="action-item">
              <i className="icon icon-user"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
