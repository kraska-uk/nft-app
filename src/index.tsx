import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer, } from 'react-hot-loader';
import App from './App';
import reportWebVitals from './reportWebVitals';



const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./App', () => {
    // if you are using harmony modules ({modules:false})
    render(App);
    // in all other cases - re-require App manually
    render(require('./App'));
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ('ethereum' in window) {
  //(window.ethereum as any).autoRefreshOnNetworkChange = false;
  (window.ethereum as any).on('chainChanged', () => window.location.reload());
  (window.ethereum as any).on('networkChanged', () => window.location.reload());
  (window.ethereum as any).on('accountsChanged', () => window.location.reload());
}
