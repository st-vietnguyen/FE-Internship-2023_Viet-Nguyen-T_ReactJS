import { ProductProps } from '../../../models/product/product.interface';
import ProductList from '../components/ProductList';

interface productProps {
  addToCart: (product: ProductProps) => void;
}

const Recommend = ({ addToCart }: productProps) => {
  return (
    <section className="section section-products">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="" className="section-product-link">
            Show more
          </a>
        </div>
        <ProductList addToCart={addToCart} />
      </div>
    </section>
  );
};

export default Recommend;
