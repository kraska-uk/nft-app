import { ModalProps as ModalPropsUi } from 'semantic-ui-react';



export type Handler = (data?: any) => void;

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, ModalPropsUi {
  title: string;
  actions?: any;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}
