import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/components/Header';
import {
  StorageKey,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import Cart, { CartItemAction, CartItemModel } from '../../models/cart/cart';
import CartItem from './components/CartItem';

const CartPage = () => {
  const [cart, setCart] = useState<Cart>(() => {
    const cartStore = getDataFromLocalStorage(StorageKey.CART);
    const cartData = new Cart(
      cartStore.map((prd: CartItemModel) => {
        return new CartItemModel(prd);
      })
    );

    return cartData;
  });
  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cart.listProduct);
  }, [cart]);

  const handleChangeQuantity = (productId: number, action: string) => {
    let productFind = cart.listProduct.find((item) => {
      return productId === item.id;
    });
    if (productFind) {
      switch (action) {
        case CartItemAction.INCREASE:
          productFind.quantity += 1;
          break;
        case CartItemAction.DECREASE:
          productFind.quantity -= 1;
          if (productFind.quantity === 0) {
            deleteProduct(productId);
            return;
          }
          break;
        default:
          break;
      }
    }
    setCart({ ...cart });
  };
  const deleteProduct = (productId: number) => {
    if (window.confirm('Are you sure ?')) {
      setCart({
        ...cart,
        listProduct: cart.listProduct.filter((item) => {
          return item.id !== productId;
        }),
      });
    }
  };

  return (
    <>
      <Header cartQuantity={cart.calcTotalProduct()} />
      <main className="main">
        <div className="cart-page">
          <div className="container">
            {/* <a className='btn back-link' href='/'>
              Back Home
            </a>
            <div className='sold-out-wrapper'>
              <img
                className='sold-out-image'
                src='../assets/images/sold-out.png'
              />
              <div />
            </div> */}
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
                {cart.listProduct.map((item: CartItemModel) => {
                  return (
                    <CartItem
                      key={item.id}
                      cartItemData={item}
                      handleChangeQuantity={handleChangeQuantity}
                      deleteProduct={deleteProduct}
                    />
                  );
                })}
              </tbody>
            </table>
            <span className="cart-total-price btn btn-primary">
              TOTAL: {cart.calcTotalPrice()}
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
