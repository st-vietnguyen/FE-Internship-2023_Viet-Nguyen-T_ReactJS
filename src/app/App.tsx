import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from './app.routes';
import { fetchProducts } from '../redux/actions/productActions';
import '../stylesheet/scss/style.scss';
import Header from './shared/components/Header';
import Home from './pages/home';
import Footer from './shared/components/Footer';
import CartPage from './pages/cart';
import { AppState } from '../redux/reducers/reducer';
import { CartService } from './shared/services/cart.services';

function App() {
  const dispatch = useDispatch<any>();
  const cartState = useSelector((state: AppState) => state.cart.listCartItem);
  const cartService = new CartService();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <Header cartQuantity={cartService.calcTotalProduct(cartState)} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
