import { put, take, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { inputUserNameAsync } from '../redux/actions/UserActions';
import requestModel from '../utils/request';

export function* inputUserName() {
  yield delay(1000); 
  yield { name } = take(inputUserNameAsync);
  console.log(name);
  yield put({ type: 'INPUTUSERNAME', name });
}

// export function* inputUserNameSync(test) {
//   console.log(test);
//   const name = 'Aseven';
//   yield takeEvery('INPUTUSERNAMEASYNC', () => inputUserName(name))
// }