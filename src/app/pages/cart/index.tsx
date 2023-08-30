import { Link } from 'react-router-dom';
import { CartItemModel } from '../../models/cart/cart';
import { CartService } from '../../shared/services/cart.services';
import CartList from './components/CartList';
import CartEmpty from './components/CartEmpty';

interface cartPageProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
}

const CartPage = ({ cart, updateCart }: cartPageProps) => {
  const cartService = new CartService();

  return (
    <>
      <main className="main">
        <div className="cart-page">
          <div className="container">
            {cart.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
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
                    <CartList cart={cart} updateCart={updateCart} />
                  </tbody>
                </table>
                <span className="cart-total-price btn btn-primary">
                  TOTAL: {cartService.calcTotalPrice(cart)}
                </span>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
