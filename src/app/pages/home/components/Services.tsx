const Services = () => {
  return (
    <section className="section section-services">
      <div className="container">
        <h3 className="section-title">Why should you choose us</h3>
        <ul className="service-list row">
          <li className="service-item col col-3 col-md-6 col-sm-12">
            <div className="service">
              <i className="icon icon-shipping-black"></i>
              <div className="service-content-wrapper">
                <h4 className="service-name">Free shipping</h4>
                <p className="service-description">
                  All purchases over $199 are eligible for free shipping via
                  USPS First className Mail.
                </p>
              </div>
            </div>
          </li>
          <li className="service-item col col-3 col-md-6 col-sm-12">
            <div className="service">
              <i className="icon icon-payment"></i>
              <div className="service-content-wrapper">
                <h4 className="service-name">Easy payments</h4>
                <p className="service-description">
                  All payments are processed instantlyover a secure payment
                  protocol.
                </p>
              </div>
            </div>
          </li>
          <li className="service-item col col-3 col-md-6 col-sm-12">
            <div className="service">
              <i className="icon icon-dolar"></i>
              <div className="service-content-wrapper">
                <h4 className="service-name">Money-Back Guarantee</h4>
                <p className="service-description">
                  If an item arrived damaged or you'vechanged your mind, you can
                  send itback for a full refund.
                </p>
              </div>
            </div>
          </li>
          <li className="service-item col col-3 col-md-6 col-sm-12">
            <div className="service">
              <i className="icon icon-fitnest"></i>
              <div className="service-content-wrapper">
                <h4 className="service-name">Finest Quality</h4>
                <p className="service-description">
                  Designed to last, each of our products hasbeen crafted with
                  the finest materials.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
