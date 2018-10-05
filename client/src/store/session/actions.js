export const types = {
  SAVE: Symbol('SAVE'),
  CLEAR: Symbol('CLEAR'),
};

const actions = {

  save: (data) => {
    return async dispatch => {
      dispatch({type: types.SAVE, payload: data});
    };
  },

  clear: () => {
    return dispatch => {
      dispatch({type: types.CLEAR});
    };
  },
};

export default actions;
