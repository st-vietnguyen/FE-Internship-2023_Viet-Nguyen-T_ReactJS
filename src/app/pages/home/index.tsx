import { useEffect, useState } from 'react';

import ProductToday from './components/ProductToday';
import Recommend from './components/Recommend';
import Subcribe from './components/Subcribe';
import Advertisement from './components/Advertisement';
import Banner from './components/Banner';
import Services from './components/Services';
import ProductModel from '../../models/product/product.entity';
import data from '../../shared/data/data';
import { CartItemModel } from '../../models/cart/cart';

interface productProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
}

const Home = ({ cart, updateCart }: productProps) => {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    setProducts(
      data.map((item) => {
        return new ProductModel(item);
      })
    );
  }, []);

  return (
    <>
      <main className="main">
        <div className="home-page">
          <Banner />
          <Advertisement />
          <Recommend cart={cart} updateCart={updateCart} products={products || []} />
          <Services />
          <ProductToday cart={cart} updateCart={updateCart} products={products || []} />
          <Subcribe />
        </div>
      </main>
    </>
  );
};

export default Home;
