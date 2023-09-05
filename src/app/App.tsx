import { Route, Routes } from 'react-router-dom';

import routes from './app.routes';

import '../stylesheet/scss/style.scss';
import Header from './shared/components/Header';
import Home from './pages/home';
import Footer from './shared/components/Footer';
import CartPage from './pages/cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
