function Banner() {
  return (
    <section className='section section-banner'>
      <div className='overlay'></div>
      <div className='section-content-wrapper'>
        <h2 className='section-title'>
          Sale of the <span className='text-primary'>summer</span> collection
        </h2>

        <a href='' className='shop-link'>
          <i className='icon icon-arrow-left'></i> Shop now
        </a>
      </div>

      <div className='banner-benefit'>
        <ul className='benefit-list'>
          <li className='benefit-item'>
            <div className='benefit'>
              <i className='icon icon-shipping'></i>
              <div className='benefit-content'>
                <h4 className='benefit-title'>Free shipping</h4>
                <p className='benefit-desc'>On purchase over $199</p>
              </div>
            </div>
          </li>
          <li className='benefit-item'>
            <div className='benefit'>
              <i className='icon icon-smile'></i>
              <div className='benefit-content'>
                <h4 className='benefit-title'>99% Satisfied Customers</h4>
                <p className='benefit-desc'>
                  Our client's opinions speak for themselves
                </p>
              </div>
            </div>
          </li>
          <li className='benefit-item'>
            <div className='benefit'>
              <i className='icon icon-dolar'></i>
              <div className='benefit-content'>
                <h4 className='benefit-title'>Originality Guaranteed</h4>
                <p className='benefit-desc'>
                  30 days warranty for each product from our store
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
