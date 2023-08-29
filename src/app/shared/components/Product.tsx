import ProductModel from '../../models/product/product.entity';
import { ProductProps } from '../../models/product/product.interface';

interface productItemProps {
  product: ProductModel;
  addToCart: (product: ProductProps) => void;
}
const Product = ({ product, addToCart }: productItemProps) => {
  return (
    <div className="product">
      <div
        className={`product-image-wrapper ${
          !product.status ? 'disabled' : null
        }`}>
        {product.discount > 0 && (
          <span className="tag tag-red">-{product.discount}%</span>
        )}
        <img src={product.image} alt="" className="product-image" />
        <i className="icon icon-cart" onClick={() => addToCart(product)}></i>
      </div>
      <h4 className="product-name">{product.name}</h4>
      <div className="product-price-wrapper">
        <span
          className={`price-offical ${product.discount ? 'price-sale' : null}`}>
          ${product.discount ? product.calcPriceSale() : product.price}
        </span>
        {product.discount > 0 && <span className="cost">${product.price}</span>}
      </div>
    </div>
  );
};

export default Product;
