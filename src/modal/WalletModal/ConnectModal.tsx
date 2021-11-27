import React from 'react';
import { List, } from 'semantic-ui-react';
//import { HelpIcon } from '../../components/Svg';
import { Modal } from '../ModalProvider';
import WalletCard from './WalletCard';
import config from './config';
import { Login } from './types';



interface Props {
  login: Login;
  onDismiss?: () => void;
}


const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  return (
    <Modal title={'Connect to a wallet'} onDismiss={onDismiss}>
      <List>
        {config.map((entry, index) => (
          <WalletCard
            key={entry.title}
            login={login}
            walletConfig={entry}
            onDismiss={onDismiss}
          />
        ))}
      </List>
    </Modal>
  )
};

export default ConnectModal;
