import { CartItemModel } from '../../models/cart/cart';
import { ProductProps } from '../../models/product/product.interface';

export class CartService {
  addToCart = (
    cart: CartItemModel[],
    product: ProductProps
  ): CartItemModel[] => {
    const prd = cart.find((item) => {
      return product.id === item.id;
    });

    if (prd) {
      prd.quantity += 1;
    } else {
      cart.push(
        new CartItemModel({
          ...product,
          quantity: 1,
        })
      );
    }
    return cart;
  };
  calcTotalProduct = (cart: CartItemModel[]): number => {
    let total = cart.reduce((acc: number, cur) => {
      return acc + cur.quantity;
    }, 0);
    return total;
  };
  changeQuantity = (
    cart: CartItemModel[],
    product: CartItemModel,
    newQuantity: number
  ) => {
    const prd = cart.find((item) => {
      return product.id === item.id;
    });

    if (prd) {
      prd.quantity = newQuantity;
    }
    return cart;
  };
  deleteProduct = (cart: CartItemModel[], productId: number) => {
    return cart.filter((item) => item.id !== productId);
  };
  calcTotalPrice = (cart: CartItemModel[]): string => {
    let total = cart.reduce(
      (acc: number, cur) => acc + Number.parseFloat(cur.calcTotalPrice()),
      0
    );
    return total.toFixed(2);
  };
}
