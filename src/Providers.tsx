import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { ToastContainer } from 'react-toastify';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import configureStore from './store';
import { NetworkContextName } from './constants/index';
import getLibrary from './utils/getLibrary';
import { ModalProvider } from './modal/ModalProvider';



const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

const { store, persistor } = configureStore(window?.__PRELOADED_STATE__);
delete window?.__PRELOADED_STATE__;

function Providers({ children }: any) {
  return (
    <Suspense fallback={null}>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ModalProvider>
                <Router>
                  {children}
                </Router>
              </ModalProvider>
            </PersistGate>
          </StoreProvider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </Suspense>
  );
}

export default hot(module)(Providers);
