import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './app.routes';
import { CartItemModel } from './models/cart/cart';
import {
  StorageKey,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from './shared/services/localStorage.service';

import '../stylesheet/scss/style.scss';
import Header from './shared/components/Header';
import Home from './pages/home';
import Footer from './shared/components/Footer';
import CartPage from './pages/cart';

function App() {
  const [cart, setCart] = useState<CartItemModel[]>(() => {
    return getDataFromLocalStorage(StorageKey.CART);
  });

  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cart);
  }, [cart]);

  const updateCart = (newCart: CartItemModel[]) => {
    setCart([...newCart]);
  };
  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} updateCart={updateCart} />}></Route>
        <Route
          path="/cart"
          element={<CartPage updateCart={updateCart} cart={cart} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
