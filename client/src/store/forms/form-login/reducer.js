import { reducer } from '../../../utils';
import {types} from './actions.js';

const initState = {
  data: {
    login: '',
    password: ''
  },
  wait: false,
  errors: {},
};

export default reducer(initState, {

  [types.CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },

  [types.RESET]: (state) => {
    return {
      ...state,
      data: {
        login: '',
        password: ''
      }
    };
  },

  [types.SUBMIT]: (state) => {
    return {
      ...state,
      errors: {},
      wait: true
    };
  },

  [types.SUBMIT_SUCCESS]: (state) => {
    return {
      ...state,
      data: {...initState.data},
      errors: {},
    };
  },

  [types.SUBMIT_FAILURE]: (state, action) => {
    return {
      ...state,
      errors: action.errors,
      wait: false,
    };
  },

});
