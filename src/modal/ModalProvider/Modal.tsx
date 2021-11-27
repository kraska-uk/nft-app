import React, { useState } from 'react';
import { Header, Modal as ModalUi } from 'semantic-ui-react';
import { ModalProps } from './types';



const Modal: React.FC<ModalProps> = ({
  title,
  actions,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
  open = true,
  ...props
}) => {
  return (
    <ModalUi
      closeIcon={!hideCloseButton}
      {...props}
      open={open}
      onClose={onDismiss}
    >
      <ModalUi.Header style={{}}>
        <Header>{title}</Header>
      </ModalUi.Header>
      <ModalUi.Content style={{}}>{children}</ModalUi.Content>
      <ModalUi.Actions style={{}}>{actions}</ModalUi.Actions>
    </ModalUi>
  )
};

export default Modal;
