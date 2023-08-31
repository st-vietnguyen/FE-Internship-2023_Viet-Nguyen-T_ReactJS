import { CartItemModel } from '../../models/cart/cart';
import ProductModel from '../../models/product/product.entity';
import { CartService } from '../services/cart.services';

interface productItemProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
  product: ProductModel;
}

const Product = ({ cart, updateCart, product }: productItemProps) => {
  const cartService = new CartService();

  const handleAddToCart = (cart: CartItemModel[], product: ProductModel) => {
    updateCart(cartService.addToCart(cart, product));
  };
  return (
    <div className="product">
      <div
        className={`product-image-wrapper ${
          !product.status ? 'disabled' : ''
        }`}>
        {product.discount > 0 && (
          <span className="tag tag-red">-{product.discount}%</span>
        )}
        <img src={product.image} alt="" className="product-image" />
        <i
          className="icon icon-cart"
          onClick={() => handleAddToCart(cart, product)}></i>
      </div>
      <h4 className="product-name">{product.name}</h4>
      <div className="product-price-wrapper">
        <span
          className={`price-offical ${product.discount ? 'price-sale' : ''}`}>
          ${product.discount ? product.calcPriceSale() : product.price}
        </span>
        {product.discount > 0 && <span className="cost">${product.price}</span>}
      </div>
    </div>
  );
};

export default Product;
