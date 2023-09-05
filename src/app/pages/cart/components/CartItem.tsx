import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { CartItemModel } from '../../../models/cart/cart';
import {
  changeQuantity,
  deleteCartItem,
} from '../../../../redux/actions/cartActions';

interface CartItemProps {
  cart: CartItemModel[];
  cartItemData: CartItemModel;
}

const CartItem = ({ cartItemData }: CartItemProps) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const productQuantityRef = useRef<any>(null);

  const handleChangeQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(changeQuantity(productId, newQuantity));
    } else {
      let isConfirm = window.confirm('Do you want to delete this product ?');
      if (isConfirm) {
        dispatch(deleteCartItem(productId));
      }
    }
  };
  const handleDeleteProduct = (productId: number) => {
    let isConfirm = window.confirm('Do you want to delete this product ?');
    if (isConfirm) {
      dispatch(deleteCartItem(productId));
    }
  };
  const handleUpdateQuantity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleChangeQuantity(cartItemData.id, productQuantityRef.current.value);
      setIsEdit(false);
    }
  };
  const handleBlurProductQuantityInput = () => {
    handleChangeQuantity(cartItemData.id, productQuantityRef.current.value);
    setIsEdit(false);
  };
  return (
    <tr className="product-item" key={cartItemData.id}>
      <td>{cartItemData.id}</td>
      <td>{cartItemData.name}</td>
      <td>
        <img className="product-image" src={cartItemData.image} alt="" />
      </td>
      <td>
        <div className="actions">
          <button
            className="btn-minus"
            onClick={() =>
              handleChangeQuantity(cartItemData.id, cartItemData.quantity - 1)
            }>
            -
          </button>
          {!isEdit ? (
            <span
              className="product-quantity"
              onDoubleClick={() => setIsEdit(true)}>
              {cartItemData.quantity}
            </span>
          ) : (
            <input
              autoFocus
              ref={productQuantityRef}
              className="product-quantity-input"
              type="number"
              defaultValue={cartItemData.quantity}
              onKeyUp={handleUpdateQuantity}
              onBlur={handleBlurProductQuantityInput}
            />
          )}
          <button
            className="btn-plus"
            onClick={() =>
              handleChangeQuantity(cartItemData.id, cartItemData.quantity + 1)
            }>
            +
          </button>
        </div>
      </td>
      <td className="product-total">{cartItemData.calcTotalPrice()}</td>
      <td>
        <button
          className="btn-delete"
          onClick={() => handleDeleteProduct(cartItemData.id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
