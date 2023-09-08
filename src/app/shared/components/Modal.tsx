import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { modalContext } from '../../core/context/ModalContext';
import { AppState } from '../../../redux/reducers/reducer';

interface ModalProps {
  children: any;
}

const Modal = ({ children }: ModalProps) => {
  const { isShow, setIsShow } = useContext(modalContext);
  const isLogin = useSelector((state: AppState) => state.auth.isLogin);

  useEffect(() => {
    if (isLogin) {
      setIsShow(false);
    }
  }, [isLogin]);

  return (
    <div className={`modal-wrapper ${!isShow ? 'hide' : ''}`}>
      <div className="overlay" onClick={() => setIsShow(!isShow)}></div>
      <div className="modal">
        <div className="modal-header"></div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
