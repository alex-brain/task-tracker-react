export const types = {
  TASK_FILTER_CHANGE: 'TASK_FILTER_CHANGE'
};

export default {
  change: (data) => {
    return dispatch => dispatch({
      type: types.TASK_FILTER_CHANGE,
      payload: data
    });
  },
};
