import {
  call, put, take, fork,
} from 'redux-saga/effects';
import requestModel from '../utils/request';

export function* getLanguageList(params) {
  const { code, data } = yield call(requestModel.get, 'http://192.168.6.58:3000/languageList', params);
  if (code === 0) {
    yield put({ type: 'GETLANGUAGELISTSUCCESS', languages: data });
  } else {
    yield put({ type: 'GETLANGUAGELISTFAILED' });
  }
}

export function* watchGetLanguageList() {
  const { payload } = yield take('GETLANGUAGELIST');
  yield fork(getLanguageList, payload);
}
