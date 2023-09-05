import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CartItemModel } from '../../../models/cart/cart';
import { changeQuantity, deleteProduct } from '../../../../redux/actions/cartActions';

interface CartItemProps {
  cart: CartItemModel[];
  cartItemData: CartItemModel;
}

const CartItem = ({ cartItemData }: CartItemProps) => {
  const dispatch = useDispatch();
  const [isEdit,setIsEdit] = useState(false);

  const handleChangeQuantity = (
    product: CartItemModel,
    newQuantity: number
  ) => {
    if (newQuantity > 0) {
      dispatch(changeQuantity(product, newQuantity));
    } else {
      let isConfirm = window.confirm('Do you want to delete this product ?');
      if (isConfirm) {
        dispatch(deleteProduct(product.id));
      }
    }
  };
  const handleDeleteProduct = (productId: number) => {
    let isConfirm = window.confirm('Do you want to delete this product ?');
    if (isConfirm) {
      dispatch(deleteProduct(productId));
    }
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
              handleChangeQuantity(cartItemData, cartItemData.quantity - 1)
            }>
            -
          </button>
          <span className="product-quantity">{cartItemData.quantity}</span>
          <button
            className="btn-plus"
            onClick={() =>
              handleChangeQuantity(cartItemData, cartItemData.quantity + 1)
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
