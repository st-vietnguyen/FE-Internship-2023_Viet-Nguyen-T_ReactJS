import { ReactElement } from 'react';
import Cart from './pages/cart';
import Home from './pages/home';

interface routes {
  name: string;
  path: string;
  component: ReactElement;
}
const routes: routes[] = [
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
