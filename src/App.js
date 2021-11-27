import React from 'react';
import { hot } from 'react-hot-loader';
import Providers from './Providers';
import AppRouter from './router';



function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default hot(module)(App);
