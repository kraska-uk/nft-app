import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { ConnectorNames } from '../constants';
import { connectorLocalStorageKey } from '../constants/index';
import { connectorsByName } from '../connectors';
import { toast } from 'react-toastify';



const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey);
        if (error instanceof UnsupportedChainIdError) {
          toast.error('Unsupported Chain Id. Unsupported Chain Id Error. Check your chain Id.');
        } else if (error instanceof NoEthereumProviderError) {
          toast.error('Provider Error. No provider was found');
        } else if (
          error instanceof UserRejectedRequestErrorInjected
        ) {
          toast.error('Authorization Error. Please authorize to access your account');
        } else {
          toast.error(`${error.name} ${error.message}`);
        }
      });
    } else {
      toast.error("Can't find connector. The connector config is wrong");
    }
  }, []);

  return { login, logout: deactivate };
}

export default useAuth;
