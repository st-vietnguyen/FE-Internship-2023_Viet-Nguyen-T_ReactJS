import { useSelector } from 'react-redux';

import ProductList from './ProductList';
import { AppState } from '../../../../redux/reducers/reducer';

const ProductToday = () => {
  const products = useSelector((state: AppState) => state.products.products);
  return (
    <section className="section section-new-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Products in today</h3>
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default ProductToday;
