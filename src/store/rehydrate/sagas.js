import { put, select } from 'redux-saga/effects';
import * as A from './actions';
import * as S from './selectors';



const logLocation = 'sagas/rehydrate/sagas';

export default () => {

  const clearSaga = function* () {
    yield put(A.clear());
  }

  const updateSaga = function* (action) {
    try {
      if (action && action.key) {
        yield put(A.setPersistRehydrate(action.key));
        const isRehydrated = yield select(S.isRehydrated);
        if (isRehydrated) {
          yield put(A.rehydrated());
        }
      }
    } catch (error) {
      console.error(logLocation, 'updateSaga()', error);
    }
  }

  return {
    clearSaga,
    updateSaga,
  }
}

