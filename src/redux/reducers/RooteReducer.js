import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  HomeReducer,
  UserReducer,
});
