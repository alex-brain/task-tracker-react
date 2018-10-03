import tasks from '../../api/tasks';

export const types = {
  GET_TASKS: 'GET_TASKS',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_FAILURE: 'GET_TASKS_FAILURE',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: types.GET_TASKS});
      try {
        const response = await tasks.getList();
        const result = response.data.tasks;
        dispatch({type: types.GET_TASKS_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_TASKS_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
  create: (data) => {
    return dispatch => dispatch({type: types.CREATE, payload: data});
  },
  update: (data) => {
    return dispatch => dispatch({type: types.UPDATE, payload: data});
  },
  delete: (data) => {
    return dispatch => dispatch({type: types.DELETE, payload: data});
  },
};
