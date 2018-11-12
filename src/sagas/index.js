import { all, fork } from 'redux-saga/effects';
import { inputUserName } from './UserSaga';
import { watchGetLanguageList } from './HomeSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetLanguageList),

    fork(inputUserName),
  ]);
}
