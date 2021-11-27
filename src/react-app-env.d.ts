/// <reference types="react-scripts" />
/// <reference types="redux-persist" />

interface Window {
  ethereum?: {
    isMetaMask?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  };
  web3?: any;
  BinanceChain?: BinanceChain;
  __REDUX_DEVTOOLS_EXTENSION__?: any | undefined;
  __PRELOADED_STATE__?: any | undefined;
}

interface NodeModule {
  hot?: any | undefined;
}
