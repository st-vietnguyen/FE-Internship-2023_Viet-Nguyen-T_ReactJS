import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import ProductToday from './ProductToday';
import Recommend from './Recommend';
import Subcribe from './Subcribe';
import Advertisement from './advertisement/Advertisement';
import Banner from './banner/Banner';
import Services from './services/Services';

function Home() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='home-page'>
          <Banner />
          <Advertisement />
          <Recommend />
          <Services />
          <ProductToday />
          <Subcribe />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
