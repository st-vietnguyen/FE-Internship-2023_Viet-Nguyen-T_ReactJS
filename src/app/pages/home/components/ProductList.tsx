import { useState, useEffect } from 'react';
import Product from '../../../shared/components/Product';
import data from '../../../shared/data/data';
import ProductModel from '../../../models/product/product.entity';
import { ProductProps } from '../../../models/product/product.interface';

interface productProps {
  addToCart: (product: ProductProps) => void;
}

const ProductList = ({ addToCart }: productProps) => {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    setProducts(
      data.map((item) => {
        return new ProductModel(item);
      })
    );
  }, []);

  return (
    <ul className="product-list row">
      {products?.map((prd) => {
        return (
          <li className="product-item col-3 col col-md-6" key={prd.id}>
            <a onClick={(e) => e.preventDefault()} className="product-link">
              <Product product={prd} addToCart={addToCart} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
