import { CartItemModel } from '../../../models/cart/cart';
import CartItem from './CartItem';

interface cartPageProps {
  cart: CartItemModel[];
  updateCart: (cart: CartItemModel[]) => void;
}

const CartList = ({ cart, updateCart }: cartPageProps) => {
  return (
    <>
      {cart.map((item: CartItemModel) => {
        return (
          <CartItem
            key={item.id}
            cart={cart}
            updateCart={updateCart}
            cartItemData={new CartItemModel(item)}
          />
        );
      })}
    </>
  );
};

export default CartList;
