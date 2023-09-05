import ProductToday from './components/ProductToday';
import Recommend from './components/Recommend';
import Subcribe from './components/Subcribe';
import Advertisement from './components/Advertisement';
import Banner from './components/Banner';
import Services from './components/Services';

const Home = () => {
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
