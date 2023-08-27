function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='wrapper'>
          <h1 className='logo'>
            <a href='/' className='logo-link'>
              <img
                src={require('../../../assets/images/Logo.png')}
                alt='E-Shop'
                className='logo-image'
              />
            </a>
          </h1>
          <nav className='nav-bar'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  Men
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  Women
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  Kids
                </a>
              </li>
            </ul>
          </nav>
          <ul className='actions'>
            <li className='action-item'>
              <i className='icon icon-search'></i>
            </li>
            <li className='action-item'>
              <a className='action-link' href='cart.html'>
                <div className='cart-quantity'></div>
                <i className='icon icon-cart'></i>
              </a>
            </li>
            <li className='action-item'>
              <i className='icon icon-user'></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
