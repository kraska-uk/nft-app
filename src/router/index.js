import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { routerPaths } from './helper';
import ErrorBoundary from '../components/ErrorBoundary';



const delay = 200;

const HomePage = Loadable({
  loader: () => import('../pages/HomePage'),
  loading: () => null,
  delay,
});

const NewWalletPage = Loadable({
  loader: () => import('../pages/NewWalletPage'),
  loading: () => null,
  delay,
});
const MintPage = Loadable({
  loader: () => import('../pages/MintPage'),
  loading: () => null,
  delay,
});
const AdminPage = Loadable({
  loader: () => import('../pages/AdminPage'),
  loading: () => null,
  delay,
});

const NotFoundPage = Loadable({
  loader: () => import('../pages/NotFoundPage'),
  loading: () => null,
  delay,
});


function AppRouter() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path={routerPaths.main} component={HomePage} />
        <Route exact path={routerPaths.newWallet} component={NewWalletPage} />
        <Route exact path={routerPaths.mint} component={MintPage} />
        <Route exact path={routerPaths.admin} component={AdminPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
}

export default hot(module)(AppRouter);
