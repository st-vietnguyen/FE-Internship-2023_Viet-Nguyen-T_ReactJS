function Advertisement() {
  return (
    <section className='section section-advertisement'>
      <div className='container'>
        <ul className='advertisement-list row'>
          <li className='advertisement-item col col-6 col-md-12'>
            <div className='advertisement'>
              <div className='overlay'></div>
              <h4 className='advertisement-title'>New Arrivalsare now in!</h4>
              <a href='' className='advertisement-link'>
                <button className='btn advertisement-btn'>
                  SHOW COLLECTION
                </button>
              </a>
            </div>
          </li>
          <li className='advertisement-item col col-3 col-md-6'>
            <div className='advertisement'>
              <div className='overlay'></div>
              <h4 className='advertisement-title'>Basic t-shirts $29,99</h4>
              <a href='' className='advertisement-link'>
                <button className='btn advertisement-btn'>MORE DETAIL</button>
              </a>
            </div>
          </li>
          <li className='advertisement-item col col-3 col-md-6'>
            <div className='advertisement'>
              <div className='overlay'></div>
              <span className='tag tag-red'>-50%</span>
              <h4 className='advertisement-title'>Sale this summer</h4>
              <a href='' className='advertisement-link'>
                <button className='btn advertisement-btn'>VIEW ALL</button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advertisement;
