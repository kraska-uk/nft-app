import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { isProduction } from '../constants';



export const sagaMiddleware = createSagaMiddleware();

export const createEnhancers = () => {
  let devTools = false;

  const middlewares = [];
  middlewares.push(sagaMiddleware);
  middlewares.push(thunk);

  if (!isProduction) {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger({
      collapsed: true,
    }));

    devTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : null;
  }

  const enhancers = [];
  enhancers.push(applyMiddleware(...middlewares));
  if (devTools) enhancers.push(devTools);

  return compose(...enhancers);
}

export default createEnhancers;
