import { takeLatest } from 'redux-saga/effects';
import { takeFirst } from '../lib';
import * as AT from './actionTypes';
import sagas from './sagas';



export default () => {
  const {
    clearSaga,
    updateSaga,
  } = sagas();

  return function* masksRootSaga() {
    yield takeFirst(AT.CLEAR, clearSaga);
    yield takeLatest(AT.RESIST_REHYDRATE, updateSaga);
    yield takeLatest(AT.UPDATE, updateSaga);
  }
}
