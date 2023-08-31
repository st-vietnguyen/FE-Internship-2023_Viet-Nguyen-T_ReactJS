import { ReactElement } from 'react';
import Cart from './pages/cart';
import Home from './pages/home';
import { ProductProps } from './models/product/product.interface';

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'cart',
    path: '/cart',
  },
];

export default routes;
