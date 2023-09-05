import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductModel from '../../models/product/product.entity';
import { addToCart } from '../../../redux/actions/cartActions';
import {
  StorageKey,
  saveDataToLocalStorage,
} from '../services/localStorage.service';
import { AppState } from '../../../redux/reducers/reducer';

interface productItemProps {
  product: ProductModel;
}

const Product = ({ product }: productItemProps) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: AppState) => state.cart.listCartItem);

  const handleAddToCart = (product: ProductModel) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    saveDataToLocalStorage(StorageKey.CART, cartState);
  }, [cartState]);

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
          onClick={() => handleAddToCart(product)}></i>
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
