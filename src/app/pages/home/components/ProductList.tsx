import Product from '../../../shared/components/Product';
import { CartItemModel } from '../../../models/cart/cart';
import ProductModel from '../../../models/product/product.entity';

interface ProductListProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
  products: ProductModel[];
}

const ProductList = ({ cart, updateCart, products }: ProductListProps) => {
  return (
    <ul className="product-list row">
      {products?.map((prd) => {
        return (
          <li className="product-item col-3 col col-md-6" key={prd.id}>
            <a onClick={(e) => e.preventDefault()} className="product-link">
              <Product product={prd} cart={cart} updateCart={updateCart} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
