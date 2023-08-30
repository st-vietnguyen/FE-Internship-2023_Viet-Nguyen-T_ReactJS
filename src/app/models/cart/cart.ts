import { PRODUCT_STATUS, ProductProps } from '../product/product.interface.js';

export interface CartItemType extends ProductProps {
  quantity: number;
}

export enum CartItemAction {
  INCREASE = 'Increase',
  DECREASE = 'Decrease',
}

export class CartItemModel implements CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  quantity: number;
  status: PRODUCT_STATUS;

  constructor(cartItem: CartItemType) {
    const { id, name, price, image, discount, quantity, status } = cartItem;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount || 0;
    this.quantity = quantity;
    this.status = status;
  }

  calcDiscountPrice = (): number => {
    return this.discount
      ? this.price - (this.price * this.discount) / 100
      : this.price;
  };
  calcTotalPrice = (): string => {
    return (this.calcDiscountPrice() * this.quantity).toFixed(2);
  };
}

class Cart {
  listProduct: CartItemModel[];

  constructor(listProduct: CartItemModel[]) {
    this.listProduct = listProduct;
  }

  calcTotalProduct = (): number => {
    let total = this.listProduct.reduce((acc: number, cur: CartItemModel) => {
      return acc + cur.quantity;
    }, 0);
    return total;
  };
  calcTotalPrice = (): string => {
    let total: number = this.listProduct.reduce(
      (acc: number, cur: CartItemModel) =>
        acc + Number.parseFloat(cur.calcTotalPrice()),
      0
    );
    return total.toFixed(2);
  };
}

export default Cart;
