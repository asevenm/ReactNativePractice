import {
  put, take, fork,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { inputUserNameAsync } from '../redux/actions/UserActions';
import userActions from '../redux/actionTypes/userActionTypes';
import { registerApi } from '../api/userApi';

function* inputUserName() {
  yield delay(1000);
  const { name } = yield take(inputUserNameAsync);
  console.log(name);
  yield put({ type: 'INPUTUSERNAME', name });
}

function* register(params) {
  const { code } = yield registerApi(params);
  console.log(code);
  if (code === 0) {
    yield put({ type: userActions.REGISTERSUCCESS });
  } else {
    yield put({ type: userActions.REGISTERFAILED });
  }
}

function* watchRegister() {
  const { payload } = yield take(userActions.REGISTER);
  yield fork(register, payload);
}

export { inputUserName, watchRegister };
