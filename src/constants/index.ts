export const isProduction = process.env.NODE_ENV === 'production';
export const publicUrl = process.env.PUBLIC_URL;


export const pollingInterval = 10000;
export const NetworkContextName = 'NETWORK';
export const connectorLocalStorageKey = 'connectorId';
export enum ChainId {
  ETH_MAINNET = 1,
  ETH_ROPSTEN = 3,
  ETH_RINKEBY = 4,
  ETH_GOERLI = 5,
  ETH_KOVAN = 42,

  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
};
export enum ConnectorNames {
  Injected = 'injected',
}


export const appVersion = '1.0.0';
export const appName = 'KRASKA NFT';
export const KraskaNftAddress = {
  1: '',
  4: '0x5Cb807415089C848cd2D31eF48cee5413e6937cB',
};
