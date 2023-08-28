import { ProductProps } from '../product/product.interface.js';

export interface CartItemType extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export enum CartItemAction {
  INCREASE = 'Increase',
  DECREASE = 'Decrease'
}