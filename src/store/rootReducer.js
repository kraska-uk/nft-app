import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rehydrate from './rehydrate/reducers';


export const createRootReducer = () => {
  const rootReducer = combineReducers({
    rehydrate,
  });

  return rootReducer;
};

export default createRootReducer;
