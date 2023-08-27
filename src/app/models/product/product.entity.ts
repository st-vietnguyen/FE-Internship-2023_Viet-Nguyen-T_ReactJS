import { ProductProps } from './product.interface.js';

class ProductModel implements ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  status: 0 | 1;

  constructor(product: ProductProps) {
    const { id, name, price, image, discount, status } = product;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount;
    this.status = status;
  }

  calcPriceSale() {
    return (this.price - (this.price * this.discount) / 100).toFixed(2);
  }
}

export default ProductModel;
