import React, { useMemo, useState } from 'react';
import Modal from './Modal';

interface ModalProvider {
  children: any;
}

export const ModalContext = React.createContext({});

export const ModalProvider = ({ children }: ModalProvider) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>();

  return (
    <ModalContext.Provider
      value={useMemo(
        () => ({
          hide: () => setModalContent(null),
          open: setModalContent,
        }),
        []
      )}>
      {modalContent ? <Modal>{modalContent}</Modal> : null}
      {children}
    </ModalContext.Provider>
  );
};
