export const fetchLanguageList = (params) => {
  return {
    type: 'GETLANGUAGELIST',
    payload: params,
  };
};