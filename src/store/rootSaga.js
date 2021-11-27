import { all, call, fork } from 'redux-saga/effects';
import rehydrateRootSaga from './rehydrate/sagaRegister';
import { appVersion, appName } from '../constants';



const logLocation = 'sagas/rootSaga';

export default function* rootSaga(fullApi) {
  const sagas = [
    call(welcomeSaga),
    fork(rehydrateRootSaga()),
  ];

  yield all(sagas);
}

function* welcomeSaga() {
  try {
    const style1 = 'background: white; color: black; font-size: 48px;';
    const style2 = 'font-size: 18px;';
    console.log('========================================================================================');
    console.log(`%c Version ${appVersion}`, style2);
    console.log('========================================================================================');
    console.log(`%c ${appName} `, style1);
    console.log('========================================================================================');
    console.log('%c This browser feature is intended for developers.', style2);
    console.log('%c If someone told you to copy-paste something here,', style2);
    console.log('%c it is a scam and will give them access to your money!', style2);
    console.log('========================================================================================');
  } catch (error) {
    console.error(logLocation, 'welcomeSaga()', error);
  }
  yield true;
}
