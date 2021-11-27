import Metamask from './icons/Metamask';
import MathWallet from './icons/MathWallet';
import TokenPocket from './icons/TokenPocket';
import TrustWallet from './icons/TrustWallet';
//import WalletConnect from './icons/WalletConnect';
import BinanceChain from './icons/BinanceChain';
import SafePalWallet from './icons/SafePalWallet';
import { Config } from './types';
import { ConnectorNames } from '../../constants';



const connectors: Config[] = [
  {
    title: 'MetaMask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const connectorLocalStorageKey = 'connectorId';
