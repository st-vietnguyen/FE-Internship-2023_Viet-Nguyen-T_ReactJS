import { createContext, useState } from 'react';

export const modalContext = createContext<any>(null);

interface ModalProviderProps {
  children: React.ReactElement;
}
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <modalContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </modalContext.Provider>
  );
};
