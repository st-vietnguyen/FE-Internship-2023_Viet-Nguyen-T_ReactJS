import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/components/Header';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import Cart, { CartItem } from '../../models/cart/cart.entity';

const CartPage = () => {
  const [cart, setCart] = useState<Cart>(() => {
    const cartStore = getDataFromLocalStorage('cart');
    const cartData = new Cart(
      cartStore.map((prd: CartItem) => {
        return new CartItem(prd);
      })
    );

    return cartData;
  });
  useEffect(() => {
    saveDataToLocalStorage('cart', cart.listProduct);
  }, [cart]);

  const handleChangeQuantity = (productId: number, action: string) => {
    let productFind = cart.listProduct.find((item) => {
      return productId === item.id;
    });
    if (productFind) {
      switch (action) {
        case 'Increase':
          productFind.quantity += 1;
          break;
        case 'Decrease':
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
      <Header />
      <main className='main'>
        <div className='cart-page'>
          <div className='container'>
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
            <Link className='back-link' to='/'>
              Back Home
            </Link>
            <table className='table'>
              <thead className='thead'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {cart.listProduct.map((item) => {
                  return (
                    <tr className='product-item' key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          className='product-image'
                          src={item.image}
                          alt=''
                        />
                      </td>
                      <td>
                        <div className='actions'>
                          <button
                            className='btn-minus'
                            onClick={() =>
                              handleChangeQuantity(item.id, 'Decrease')
                            }>
                            -
                          </button>
                          <span className='product-quantity'>
                            {item.quantity}
                          </span>
                          <button
                            className='btn-plus'
                            onClick={() =>
                              handleChangeQuantity(item.id, 'Increase')
                            }>
                            +
                          </button>
                        </div>
                      </td>
                      <td className='product-total'>{item.calcTotalPrice()}</td>
                      <td>
                        <button
                          className='btn-delete'
                          onClick={() => deleteProduct(item.id)}>
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <span className='cart-total-price btn btn-primary'>
              TOTAL: {cart.calcTotalPrice()}
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
