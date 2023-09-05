import { useSelector } from 'react-redux';

import ProductModel from '../../../models/product/product.entity';
import Product from '../../../shared/components/Product';
import { AppState } from '../../../../redux/reducers/reducer';
import ErrFetchProduct from '../../../shared/components/ErrFetchProduct';

interface ProductListProps {
  products: ProductModel[];
}
const ProductList = ({ products }: ProductListProps) => {
  const isLoading = useSelector((state: AppState) => state.products.isLoading);
  return (
    <ul className="product-list row">
      {!isLoading ? (
        products.length > 0 ? (
          products?.map((prd) => {
            return (
              <li className="product-item col-3 col col-md-6" key={prd.id}>
                <a onClick={(e) => e.preventDefault()} className="product-link">
                  <Product product={prd} />
                </a>
              </li>
            );
          })
        ) : (
          <ErrFetchProduct />
        )
      ) : (
        <>
          <div className="col col-3">
            <div className="skeleton-loader"></div>
          </div>
          <div className="col col-3">
            <div className="skeleton-loader"></div>
          </div>
          <div className="col col-3">
            <div className="skeleton-loader"></div>
          </div>
          <div className="col col-3">
            <div className="skeleton-loader"></div>
          </div>
        </>
      )}
    </ul>
  );
};

export default ProductList;
