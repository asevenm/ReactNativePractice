const initState = {
  time: '2018-11-08',
  languageList: [{ name: 'rust', id: 'fjaslkdfjsadfjk' }],
};

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case 'GETLANGUAGELISTSUCCESS':
      return { ...state, languageList: action.languages };
    case 'GETLANGUAGELISTFAILED':
      return state;
    default:
      return state;
  }
}
