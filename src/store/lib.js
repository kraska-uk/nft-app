import { fork, take, call } from 'redux-saga/effects';



export const takeFirst = (pattern, saga, ...args) => fork(function* () {
  while (true) {
    const action = yield take(pattern);
    yield call(saga, ...args.concat(action));
  }
});

export const newObj = (obj) => {
  return JSON.parse(JSON.stringify((obj)));
}
