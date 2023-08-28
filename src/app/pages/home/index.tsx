import { useEffect, useState } from 'react';

import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import ProductToday from './containers/ProductToday';
import Recommend from './containers/Recommend';
import Subcribe from './containers/Subcribe';
import Advertisement from './containers/Advertisement';
import Banner from './containers/Banner';
import Services from './containers/Services';
import {
  StorageKey,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import Cart, { CartItemModel } from '../../models/cart/cart';
import { ProductProps } from '../../models/product/product.interface';

function Home() {
  const [cart, setCart] = useState<Cart>(() => {
    const cartStore = getDataFromLocalStorage(StorageKey.CART);
    const cartData = new Cart(
      cartStore.map((prd: CartItemModel) => {
        return new CartItemModel(prd);
      })
    );

    return cartData;
  });
  const addToCart = (product: ProductProps) => {
    let findProduct = cart.listProduct.find((item) => {
      return item.id === product.id;
    });
    if (findProduct) {
      findProduct.quantity += 1;
      setCart({ ...cart });
    } else {
      // setCart([...cart, new CartItemModel({ ...product, quantity: 1 })]);
      setCart({
        ...cart,
        listProduct: [
          ...cart.listProduct,
          new CartItemModel({ ...product, quantity: 1 }),
        ],
      });
    }
  };
  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cart.listProduct);
  }, [cart]);
  return (
    <>
      <Header cartQuantity={cart.calcTotalProduct()} />
      <main className="main">
        <div className="home-page">
          <Banner />
          <Advertisement />
          <Recommend addToCart={addToCart} />
          <Services />
          <ProductToday addToCart={addToCart} />
          <Subcribe />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
