import userActions from '../actionTypes/userActionTypes';

export const inputUserNameAsync = name => ({
  type: 'INPUTUSERNAMEASYNC',
  name,
});

export const register = params => ({
  type: userActions.REGISTER,
  payload: params,
});

export const signUp = params => ({
  type: userActions.SIGNUP,
  payload: params,
});

export { inputUserNameAsync as default };
