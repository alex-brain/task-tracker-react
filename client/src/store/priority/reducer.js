import reducer from '../../utils/reducer';
import {priorityTypes} from './actions';

const initState = {
  list: [],
  wait: false,
  errors: {}
};

export default reducer(initState, {
  [priorityTypes.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [priorityTypes.GET_PRIORITY]: (state) => {
    return {
      ...state,
      list: [],
      wait: true
    };
  },

  [priorityTypes.GET_PRIORITY_SUCCESS]: (state, action) => {
    return {
      ...state,
      list : [
        ...action.payload
      ],
      wait: false
    };
  },

  [priorityTypes.GET_PRIORITY_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },
});

