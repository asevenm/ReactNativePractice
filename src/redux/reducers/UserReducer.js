const initState = {
  name: 'Aseven',
};

export default function UserReducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case 'INPUTUSERNAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
}
