const ErrFetchProduct = () => {
  return (
    <div className="err-wrapper">
      <img
        className="err-product-image"
        src="/assets/images/close_up.png"
        alt=""
      />
      <span className="err-message">
        Still Nothing ? Please Refresh Page !!
      </span>
    </div>
  );
};

export default ErrFetchProduct;
