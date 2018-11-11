import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers/RooteReducer';
import rooSaga from '../sagas';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

