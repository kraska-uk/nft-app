import React from 'react';
import { Button } from 'semantic-ui-react';
import LinkExternal from '../../components/Link/LinkExternal';
import { Modal } from '../ModalProvider';
import CopyToClipboard from './CopyToClipboard';
import { connectorLocalStorageKey } from './config';



interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title='Your wallet' onDismiss={onDismiss}>
    <b>{account}</b><br />
    <LinkExternal href={`https://etherscan.io/address/${account}`} >
      View on Etherscan
    </LinkExternal>
    <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    <Button
      scale='sm'
      variant='secondary'
      onClick={() => {
        logout();
        window.localStorage.removeItem(connectorLocalStorageKey);
        onDismiss();
      }}
    >Logout</Button>
  </Modal>
);

export default AccountModal;
