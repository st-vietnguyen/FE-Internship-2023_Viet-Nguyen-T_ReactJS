const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top row">
          <div className="shop-info col col-6 col-md-12">
            <div className="shop-info-header">
              <img
                src={require('../../../assets/images/Logo.png')}
                alt="logo"
                className="brand-image"
              />
            </div>
            <p className="shop-info-desc">
              House My Brand designs clothing for the young, the old &everyone
              in between – but most importantly, for the fashionable
            </p>
            <ul className="socials">
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="icon icon-facebook"></i>
                </a>
              </li>
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="icon icon-twitter"></i>
                </a>
              </li>
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="icon icon-linkedin"></i>
                </a>
              </li>
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="icon icon-instag tag-redram"></i>
                </a>
              </li>
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="icon icon-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav col col-2 col-md-12">
            <p className="nav-title">Shopping online</p>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Oder Status
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  shipping and Delivery
                </a>
              </li>
              <a href="" className="nav-link">
                <li className="nav-item">Returns</li>
              </a>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav col col-2 col-md-12">
            <p className="nav-title">Information</p>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Gift Cards
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Find a store
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Newsletter
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Bacome a member
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Site feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav col col-2 col-md-12">
            <p className="nav-title">Contact</p>
            <ul className="footer-list">
              <li className="nav-item">
                <a href="" className="nav-link">
                  store@uikit.com
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Hotline: +1 131 138 138
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
