import reqeustModel from '../utils/request';
import constants from '../constants/constants';

const fetchLanguageList = async (params) => {
  const res = reqeustModel.get('192.168.6.58:3000/languageList', params);
  console.log(res);
};

const registerApi = async (params) => {
  const res = reqeustModel.post(`${constants.host}/register`, params);
  return res;
};

export { fetchLanguageList, registerApi };
