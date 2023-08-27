import { useState, useEffect } from 'react';
import Product from '../../shared/components/Product';
import data from '../../shared/data/data';
import ProductModel from '../../models/product/product.entity';
import { CartItem } from '../../models/cart/cart.entity';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../shared/services/localStorage.service';
import { ProductProps } from '../../models/product/product.interface';

function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>();
  const [cart, setCart] = useState<CartItem[]>(getDataFromLocalStorage('cart'));
  useEffect(() => {
    setProducts(
      data.map((item) => {
        return new ProductModel(item);
      })
    );
  }, []);
  useEffect(() => {
    saveDataToLocalStorage('cart', cart);
  }, [cart]);
  const addToCart = (product: ProductProps) => {
    let findProduct = cart.find((item) => {
      return item.id === product.id;
    });
    if (findProduct) {
      findProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, new CartItem({ ...product, quantity: 1 })]);
    }
  };
  return (
    <ul className='product-list row'>
      {products?.map((prd) => {
        return (
          <li className='product-item col-3 col col-md-6' key={prd.id}>
            <a onClick={(e) => e.preventDefault()} className='product-link'>
              <Product product={prd} addToCart={addToCart} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
