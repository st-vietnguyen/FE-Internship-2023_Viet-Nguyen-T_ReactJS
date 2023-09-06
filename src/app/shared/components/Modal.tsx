interface Modal {
  children: any;
}

const Modal = ({ children }: Modal) => {
  return (
    <div className={`modal-wrapper`}>
      <div className="overlay"></div>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
