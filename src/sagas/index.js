import { all, fork } from 'redux-saga/effects';
import { inputUserName } from './UserSaga';
import { helloSaga, watchGetLanguageList, getLanguageList } from './HomeSaga';

export default function* rootSaga() {
  yield all([
    fork(helloSaga),
    fork(watchGetLanguageList),
    // fork(getLanguageList),

    // fork(inputUserNameSync),
    fork(inputUserName),
  ]);
};