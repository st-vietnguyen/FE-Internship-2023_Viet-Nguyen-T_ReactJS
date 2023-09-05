import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <Link className="btn back-link" to="/">
        Back Home
      </Link>
      <div className="sold-out-wrapper">
        <img className="sold-out-image" src={'/images/sold-out.png'} />
        <div />
      </div>
    </>
  );
};

export default CartEmpty;
