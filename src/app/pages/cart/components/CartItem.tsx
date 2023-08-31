import { CartItemModel } from '../../../models/cart/cart';
import { CartService } from '../../../shared/services/cart.services';

interface CartItemProps {
  cart: CartItemModel[];
  cartItemData: CartItemModel;
  updateCart: (cart: CartItemModel[]) => void;
}

const CartItem = ({ cart, cartItemData, updateCart }: CartItemProps) => {
  const cartService = new CartService();
  const handleChangeQuantity = (
    cart: CartItemModel[],
    product: CartItemModel,
    newQuantity: number
  ) => {
    if (newQuantity > 0) {
      updateCart(cartService.changeQuantity(cart, product, newQuantity));
    } else {
      let isConfirm = window.confirm('Are you want to delete product ?');
      if (isConfirm) {
        updateCart(cartService.deleteProduct(cart, cartItemData.id));
      }
    }
  };
  const deleteProduct = (cart: CartItemModel[], productId: number) => {
    let isConfirm = window.confirm('Are you want to delete product ?');
    if (isConfirm) {
      updateCart(cartService.deleteProduct(cart, productId));
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
              handleChangeQuantity(
                cart,
                cartItemData,
                cartItemData.quantity - 1
              )
            }>
            -
          </button>
          <span className="product-quantity">{cartItemData.quantity}</span>
          <button
            className="btn-plus"
            onClick={() =>
              handleChangeQuantity(
                cart,
                cartItemData,
                cartItemData.quantity + 1
              )
            }>
            +
          </button>
        </div>
      </td>
      <td className="product-total">{cartItemData.calcTotalPrice()}</td>
      <td>
        <button
          className="btn-delete"
          onClick={() => deleteProduct(cart, cartItemData.id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
