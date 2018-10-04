import reducer from '../../utils/reducer';
import {types} from './actions';

const initState = {
  data: 'подробный',
  options: [
    'подробный',
    'краткий',
    'scrum доска'
  ]
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.VIEW_SELECT_CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },
});

