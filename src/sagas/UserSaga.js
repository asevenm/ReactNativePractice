import {
  put, take, fork, cancel, call,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { inputUserNameAsync } from '../redux/actions/UserActions';
import userActions from '../redux/actionTypes/userActionTypes';
import { registerApi, signUpApi, signInApi } from '../api/userApi';

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
  while (true) {
    const { payload } = yield take(userActions.REGISTER);
    yield fork(register, payload);
  }
}

function* authorize(params) {
  try {
    const token = yield call(signInApi, params);
    yield put({ type: userActions.SIGNINSUCCESS, data: token });
  } catch (err) {
    yield put({ type: userActions.SIGNINFAILED });
  } finally {
    if (yield cancel()) {
      // some logic needed
    }
  }
}

function* loginFlow() {
  while (true) {
    const { payload } = yield take(userActions.SIGNUP);
    const task = yield fork(authorize, payload);
    const action = yield take([userActions.SIGNUP, userActions.SIGNINFAILED]);
    if (action.type === userActions.SIGNUP) {
      yield cancel(task);
    }
    // some logic needed
  }
}

export { inputUserName, watchRegister, loginFlow };
