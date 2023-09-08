import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CartService } from '../../shared/services/cart.services';
import CartList from './components/CartList';
import CartEmpty from './components/CartEmpty';
import { useSelector } from 'react-redux';
import { CartItemModel } from '../../models/cart/cart';
import {
  StorageKey,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import { AppState } from '../../../redux/reducers/reducer';

const CartPage = () => {
  const cart = useSelector((state: AppState) => {
    return state.cart.listCartItem.map((item) => {
      return new CartItemModel(item);
    });
  });

  const cartService = new CartService();

  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cart);
  }, [cart]);
  return (
    <>
      <main className="main">
        <div className="cart-page">
          <div className="container">
            {cart.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
                <div className="row">
                  <div className="col col-9">
                    <Link className="back-link" to="/">
                      Back Home
                    </Link>
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="tbody">
                        <CartList cart={cart} />
                      </tbody>
                    </table>
                  </div>
                  <div className="col col-3">
                    <div className="checkout">
                      <h3 className="checkout-title">Checkout</h3>
                      <span className="cart-total-price btn">
                        TOTAL: {cartService.calcTotalPrice(cart)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
