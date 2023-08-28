import { CartItemAction, CartItemModel } from '../../../models/cart/cart';

interface CartItemProps {
  cartItemData: CartItemModel;
  handleChangeQuantity: (productId: number, action: CartItemAction) => void;
  deleteProduct: (productId: number) => void;
}

const CartItem = ({
  cartItemData,
  handleChangeQuantity,
  deleteProduct,
}: CartItemProps) => {
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
              handleChangeQuantity(cartItemData.id, CartItemAction.DECREASE)
            }>
            -
          </button>
          <span className="product-quantity">{cartItemData.quantity}</span>
          <button
            className="btn-plus"
            onClick={() =>
              handleChangeQuantity(cartItemData.id, CartItemAction.INCREASE)
            }>
            +
          </button>
        </div>
      </td>
      <td className="product-total">{cartItemData.calcTotalPrice()}</td>
      <td>
        <button
          className="btn-delete"
          onClick={() => deleteProduct(cartItemData.id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
