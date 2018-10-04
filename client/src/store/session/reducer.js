import reducer from '../../utils/reducer';
import {types} from './actions.js';

const initState = {
  user: {}
};

export default reducer(initState, {

  [types.SAVE]: (state, action) => {
    return {
      ...action.payload
    };
  },

  [types.CLEAR]: () => {
    return {
      user: {}
    };
  },
});
