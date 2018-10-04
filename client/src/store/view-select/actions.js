export const types = {
  VIEW_SELECT_CHANGE: 'VIEW_SELECT_CHANGE'
};

export default {
  change: (data) => {
    return dispatch => dispatch({
      type: types.VIEW_SELECT_CHANGE,
      payload: data
    });
  },
};
