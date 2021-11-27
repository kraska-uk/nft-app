import React from 'react';
import { Button, List, } from 'semantic-ui-react';
import { connectorLocalStorageKey } from './config';
import { Login, Config } from './types';



interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <List.Item>
      <Button fluid className='btn-blue wallet-card link' compact
        style={{ justifyContent: 'space-between', margin: '0', }}
        width='100%'
        variant='tertiary'
        onClick={() => {
          login(walletConfig.connectorId);
          window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
          onDismiss();
        }}
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        {title}
        <Icon width='32px' />
      </Button>
    </List.Item>
  );
};

export default WalletCard;
