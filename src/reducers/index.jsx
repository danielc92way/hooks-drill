import { combineReducers } from 'redux';

const countReducer = (state = { count: 0 }, action) => {
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

const nameReducer = (state = { name: 'daniel c' }, action) => {
  switch (action.type) {
    case 'NAME_UPDATE':
      return { ...state, name: action.payload.userName };
    default:
      return state;
  }
};

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD':
      return [...state, action.value];
    case 'TASK_DELETE':
      return [...state.filter((task) => task.id !== action.value)];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
  tasks: tasksReducer,
});

export default rootReducer;
