import reducer from '../../utils/reducer';
import {types} from './actions';

const initState = {
  list: []
};

export default reducer(initState, {
  
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.GET_TASKS]: (state) => {
    return {
      ...state,
      list: [],
      wait: true
    };
  },

  [types.GET_TASKS_SUCCESS]: (state, action) => {
    return {
      ...state,
      list : [
        ...action.payload
      ],
      wait: false
    };
  },

  [types.GET_TASKS_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },

  [types.CREATE]: (state, action) => {
    return {
      ...state,
      list: [
        ...state.list,
        action.payload
      ]
    };
  },

  [types.UPDATE]: (state, action) => {
    const updatedItem = action.payload;
    const list = state.list.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    return {
      ...state,
      list
    };
  },

  [types.DELETE]: (state, action) => {
    const deletedItem = action.payload;
    const list = state.list.filter(item => item.id !== deletedItem.id);
    return {
      ...state,
      list
    };
  }
});

