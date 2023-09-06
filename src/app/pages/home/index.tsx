import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductToday from './components/ProductToday';
import Recommend from './components/Recommend';
import Subcribe from './components/Subcribe';
import Advertisement from './components/Advertisement';
import Banner from './components/Banner';
import Services from './components/Services';
import { fetchProducts } from '../../../redux/actions/productActions';
const Home = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <main className="main">
        <div className="home-page">
          <Banner />
          <Advertisement />
          <Recommend />
          <Services />
          <ProductToday />
          <Subcribe />
        </div>
      </main>
    </>
  );
};

export default Home;
