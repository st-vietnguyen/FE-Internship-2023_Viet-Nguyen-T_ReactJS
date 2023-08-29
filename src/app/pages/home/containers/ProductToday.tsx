import { ProductProps } from '../../../models/product/product.interface';
import ProductList from '../components/ProductList';

interface productProps {
  addToCart: (product: ProductProps) => void;
}

const ProductToday = ({ addToCart }: productProps) => {
  return (
    <section className="section section-new-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Products in today</h3>
        </div>
        <ProductList addToCart={addToCart} />
      </div>
    </section>
  );
};

export default ProductToday;
