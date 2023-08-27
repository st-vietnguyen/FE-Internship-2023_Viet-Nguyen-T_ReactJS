function Product() {
  return (
    <div className='product'>
      <div className='product-image-wrapper'>
        <span className='tag tag-red'>30%</span>
        <img src='' alt='' className='product-image' />
        <i className='icon icon-cart'></i>
      </div>
      <h4 className='product-name'></h4>
      <div className='product-price-wrapper'>
        <span className='price-offical price-sale'></span>
        <span className='cost'></span>
      </div>
    </div>
  );
}

export default Product;
