import reqeustModel from '../utils/request';

const fetchLanguageList = async () => {
  const res = reqeustModel.get('192.168.6.58:3000/languageList');
  console.log(res);
};

export { fetchLanguageList as default };
