import React from 'react';
import { hot } from 'react-hot-loader';
import { Segment, Container, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { routerPaths } from '../router/helper';
import { appName } from '../constants';
//import * as S from '../store/selectors';
//import * as A from '../store/actions';


import { useEagerConnect, useActiveWeb3React } from '../hooks/index';
import useAuth from '../hooks/useAuth';
import { useWalletModal } from '../modal/WalletModal';


function Header() {
  const triedEager = useEagerConnect();
  const context = useActiveWeb3React();
  const { library, chainId, account, active, error } = context;
  const { login, logout } = useAuth();
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);

  const accountShort = account
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : 'Connect wallet';

  return (
    <Segment as={'header'}>
      <Menu fixed='top' size='large' inverted>
        <Container>
          <Menu.Item header as={Link} to={routerPaths.main}>
            {appName}
          </Menu.Item>
          <Menu.Item header as={NavLink} to={routerPaths.newWallet}>
            New Wallet
          </Menu.Item>
          <Menu.Item header as={NavLink} to={routerPaths.mint}>
            Mint
          </Menu.Item>
          <Menu.Item header as={NavLink} to={routerPaths.admin}>
            Admin
          </Menu.Item>

          <Menu.Item position='right'
            style={{ color: chainId === 1 ? 'green' : 'red' }}
          >{chainId === 1 ? 'Mainnet' : 'Testnet'}</Menu.Item>
          <Menu.Item
            onClick={account ? onPresentAccountModal : onPresentConnectModal}
          >{accountShort}</Menu.Item>
        </Container>
      </Menu>
    </Segment>
  );
};

export default hot(module)(Header);
