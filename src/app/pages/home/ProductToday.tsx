import ProductList from './ProductList';

function ProductToday() {
  return (
    <section className='section section-new-products'>
      <div className='container'>
        <div className='section-header'>
          <h3 className='section-title'>Products in today</h3>
        </div>
        <ProductList />
      </div>
    </section>
  );
}

export default ProductToday;
