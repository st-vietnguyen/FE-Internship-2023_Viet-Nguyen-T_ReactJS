import { CartItemModel } from '../../../models/cart/cart';
import ProductModel from '../../../models/product/product.entity';
import ProductList from './ProductList';

interface productProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
  products: ProductModel[];
}
const ProductToday = ({ cart, updateCart, products }: productProps) => {
  return (
    <section className="section section-new-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Products in today</h3>
        </div>
        <ProductList cart={cart} updateCart={updateCart} products={products} />
      </div>
    </section>
  );
};

export default ProductToday;
