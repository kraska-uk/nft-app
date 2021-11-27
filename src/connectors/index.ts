// https://github.com/pancakeswap/pancake-swap-interface-v1/blob/master/src/connectors/index.ts
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from './NetworkConnector';
import { ConnectorNames } from '../constants';



export const network = new NetworkConnector({
  urls: {
    1: 'https://localhost/',
    4: 'https://localhost/',
  },
  defaultChainId: 1,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  //supportedChainIds: [1],
});


export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}
