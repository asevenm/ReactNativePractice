import {
  put, take,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { inputUserNameAsync } from '../redux/actions/UserActions';

function* inputUserName() {
  yield delay(1000);
  const { name } = yield take(inputUserNameAsync);
  console.log(name);
  yield put({ type: 'INPUTUSERNAME', name });
}

export { inputUserName as default };
