import reducer from '../../utils/reducer';
import {types} from './actions';
import {priorityTypes} from '../priority/actions';
import {statusTypes} from '../statuses/actions';

const initState = {
  data: {
    priority: ['любой'],
    statuses: ['любой']
  }
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [priorityTypes.GET_PRIORITY_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: {
        ...state.data,
        priority: [
          ...state.data.priority,
          action.payload
        ]
      }
    };
  },
  [statusTypes.GET_STATUSES_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: {
        ...state.data,
        statuses: [
          ...state.data.statuses,
          action.payload
        ]
      }
    };
  },

  [types.TASK_FILTER_CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },
});

