import reducer from '../../utils/reducer';
import {types} from './actions';

const initState = {
  list: [],
  wait: false,
  errors: {}
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.GET_PRIORITY]: (state) => {
    return {
      ...state,
      list: [],
      wait: true
    };
  },

  [types.GET_PRIORITY_SUCCESS]: (state, action) => {
    return {
      ...state,
      list : [
        ...action.payload
      ],
      wait: false
    };
  },

  [types.GET_PRIORITY_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },
});

