import { useSelector } from 'react-redux';

import ProductList from './ProductList';
import { AppState } from '../../../../redux/reducers/reducer';
import ProductModel from '../../../models/product/product.entity';

const Recommend = () => {
  const products = useSelector((state: AppState) =>
    state.products.products.map((item) => new ProductModel(item))
  );
  return (
    <section className="section section-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="" className="section-product-link">
            Show more
          </a>
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Recommend;
