import requestModel from '../utils/request';
import constants from '../constants/constants';

const fetchLanguageList = async (params) => {
  const res = requestModel.get('192.168.6.58:3000/languageList', params);
  console.log(res);
};

const registerApi = async (params) => {
  const res = requestModel.post(`${constants.host}/register`, params);
  return res;
};

const signUpApi = async params => requestModel.post(`${constants.host}/signUp`, params);

const signInApi = async params => requestModel.post(`${constants.host}/signIn`, params);

export {
  fetchLanguageList, registerApi, signUpApi, signInApi,
};
