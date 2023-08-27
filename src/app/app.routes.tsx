import Cart from './pages/cart';
import Home from './pages/home';
const routes = [
  {
    name: 'home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'cart',
    path: '/cart',
    component: <Cart />,
  },
];

export default routes;
