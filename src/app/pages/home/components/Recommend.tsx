import { CartItemModel } from '../../../models/cart/cart';
import ProductModel from '../../../models/product/product.entity';
import ProductList from './ProductList';

interface productProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
  products: ProductModel[];
}

const Recommend = ({  cart, updateCart, products }: productProps) => {
  return (
    <section className="section section-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="" className="section-product-link">
            Show more
          </a>
        </div>
        <ProductList
          cart={cart}
          updateCart={updateCart}
          products={products}
        />
      </div>
    </section>
  );
};

export default Recommend;
