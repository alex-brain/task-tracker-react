import reducer from '../../utils/reducer';
import {statusTypes} from './actions';

const initState = {
  list: [],
  wait: false,
  errors: {}
};

export default reducer(initState, {
  [statusTypes.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [statusTypes.GET_STATUSES]: (state) => {
    return {
      ...state,
      list: [],
      wait: true
    };
  },

  [statusTypes.GET_STATUSES_SUCCESS]: (state, action) => {
    return {
      ...state,
      list : [
        ...action.payload
      ],
      wait: false
    };
  },

  [statusTypes.GET_STATUSES_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },
});

