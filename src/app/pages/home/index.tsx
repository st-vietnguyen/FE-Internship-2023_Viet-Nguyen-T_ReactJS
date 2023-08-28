import { useEffect, useState } from 'react';

import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import ProductToday from './ProductToday';
import Recommend from './Recommend';
import Subcribe from './Subcribe';
import Advertisement from './advertisement/Advertisement';
import Banner from './banner/Banner';
import Services from './services/Services';
import {
  StorageKey,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import Cart, { CartItem } from '../../models/cart/cart.entity';
import { ProductProps } from '../../models/product/product.interface';

function Home() {
  const [cart, setCart] = useState<Cart>(() => {
    const cartStore = getDataFromLocalStorage(StorageKey.CART);
    const cartData = new Cart(
      cartStore.map((prd: CartItem) => {
        return new CartItem(prd);
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
      // setCart([...cart, new CartItem({ ...product, quantity: 1 })]);
      setCart({
        ...cart,
        listProduct: [
          ...cart.listProduct,
          new CartItem({ ...product, quantity: 1 }),
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
