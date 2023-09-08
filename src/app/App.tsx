import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './app.routes';
import '../stylesheet/scss/style.scss';
import Header from './shared/components/Header';
import Home from './pages/home';
import Footer from './shared/components/Footer';
import CartPage from './pages/cart';
import { ModalProvider } from './core/context/ModalContext';
import { AppState } from '../redux/reducers/reducer';

function App() {
  const isLogin = useSelector((state: AppState) => state.auth.isLogin);
  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/cart"
            element={isLogin ? <CartPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Home />} />
          {/* {routes.map((route) => (
            <Route path={route.path} element={route.element}></Route>
          ))} */}
        </Routes>
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default App;
