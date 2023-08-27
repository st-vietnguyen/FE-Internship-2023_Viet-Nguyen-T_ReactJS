function Subcribe() {
  return (
    <section className='section section-newsletter'>
      <div className='overlay'></div>
      <div className='container'>
        <form className='newsletter-form-group'>
          <div className='row'>
            <div className='col col-6 col-sm-8 col-md-8'>
              <label htmlFor='email' className='newsletter-label'>
                Subcribe to our newsletter andreceive exclusive offers every
                week
              </label>
            </div>
            <div className='col col-4 col-sm-12 col-md-9'>
              <input
                type='text'
                className='newsletter-input'
                placeholder='Enter your email'
              />
            </div>
            <div className='col col-2 col-sm-3 col-md-3'>
              <button className='newsletter-btn'>Subcribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subcribe;
