import tasks from '../../api/tasks';

export const types = {
  GET_LIST: 'GET_LIST',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'GET_LIST_FAILURE',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: types.GET_LIST});
      try {
        const response = await tasks.getList();
        const result = response.data.tasks;
        dispatch({type: types.GET_LIST_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_LIST_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
  update: (data) => {
    return dispatch => dispatch({type: types.UPDATE, payload: data});
  },
  delete: (data) => {
    return dispatch => dispatch({type: types.DELETE, payload: data});
  },
};
