import React, { createContext, useState } from 'react';
import { Handler } from './types';



interface ModalsContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
}

export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
  open: true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (node: React.ReactNode, data?: any) => {
    if (data) setData(data);
    setModalNode(node);
    setIsOpen(true);
  }

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
    setData(null);
  }

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  }

  return (
    <Context.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
        open: isOpen,
      }}
    >
      {isOpen && (
        <>
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss, data,
            })}
        </>
      )}
      {children}
    </Context.Provider>
  );
}

export default ModalProvider;
