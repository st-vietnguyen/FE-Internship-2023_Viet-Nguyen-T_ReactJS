import { CartItemModel } from '../../../models/cart/cart';
import CartItem from './CartItem';

interface cartPageProps {
  cart: CartItemModel[];
}

const CartList = ({ cart }: cartPageProps) => {
  return (
    <>
      {cart.map((item: CartItemModel) => {
        return <CartItem key={item.id} cart={cart} cartItemData={item} />;
      })}
    </>
  );
};

export default CartList;
