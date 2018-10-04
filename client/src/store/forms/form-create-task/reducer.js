import reducer from '../../../utils/reducer';
import {types} from './actions.js';

const initState = {
  data: {
    title: '',
    description: '',
    completed: false,
    priority: 'обычная',
    dueTime: '',
    executionTime: ''
  },
  errors: {}
};

export default reducer(initState, {

  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.FORM_CREATE_TASK_CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },

  [types.FORM_CREATE_TASK_RESET]: (state) => {
    return {
      ...state,
      data: {
        title: '',
        description: '',
        completed: false,
        priority: 'обычная',
        dueTime: '',
        executionTime: ''
      }
    };
  },

  [types.FORM_CREATE_TASK_SUBMIT_SUCCESS]: (state) => {
    return {
      ...state,
      errors: {}
    };
  },

  [types.FORM_CREATE_TASK_SUBMIT_FAILURE]: (state, action) => {
    return {
      ...state,
      errors: action.payload
    };
  },
});

