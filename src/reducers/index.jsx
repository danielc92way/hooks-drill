const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'COUNT_UP':
      return { ...state, count: state.count + 1 };
    case 'COUNT_DOWN':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: action.value };
    default:
      return state;
  }
};

export default rootReducer;
