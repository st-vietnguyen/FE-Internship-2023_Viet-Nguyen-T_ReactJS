import CartPage from './pages/cart';
import Home from './pages/home';


const routes = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'cart',
    path: '/cart',
    element: <CartPage />,
  },
];

export default routes;
