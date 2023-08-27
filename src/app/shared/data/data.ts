import { ProductProps } from '../../models/product/product.interface';

const products: ProductProps[] = [
  {
    id: 0,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: require('../../../assets/images/product-1.png'),
    discount: 30,
    status: 1,
  },
  {
    id: 1,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: require('../../../assets/images/product-2.png'),
    discount: 0,
    status: 1,
  },
  {
    id: 2,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: require('../../../assets/images/product-3.png'),
    discount: 20,
    status: 0,
  },
  {
    id: 3,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: require('../../../assets/images/product-4.png'),
    discount: 10,
    status: 1,
  },
];

export default products;
