import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../../../shared/components/Product';
import {
  fetchProducts,
} from '../../../../redux/actions/productActions';
import { AppState } from '../../../../redux/reducers/reducer';
import ProductModel from '../../../models/product/product.entity';

const ProductList = () => {
  const products = useSelector((state: AppState) =>
    state.products.products.map((item) => new ProductModel(item))
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ul className="product-list row">
      {products?.map((prd) => {
        return (
          <li className="product-item col-3 col col-md-6" key={prd.id}>
            <a onClick={(e) => e.preventDefault()} className="product-link">
              <Product product={prd} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
