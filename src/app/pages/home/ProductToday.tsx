import { useState, useEffect } from 'react';
import Product from '../../shared/components/Product';
import fetchData from '../../shared/utils/fetchData';
function ProductToday() {
  const [products, setProducts] = useState();

  const getData = async () => {
    const data = await fetchData('http://localhost:3000/src/app/shared/data/data.json');
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetch('../../shared/data/data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(() => console.log(products));
  }, []);
  return (
    <section className='section section-new-products'>
      <div className='container'>
        <div className='section-header'>
          <h3 className='section-title'>Products in today</h3>
        </div>
        <ul className='product-list row'>
          <li className='product-item col-3 col col-md-6'>
            <a href='' className='product-link'>
              <Product />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductToday;
