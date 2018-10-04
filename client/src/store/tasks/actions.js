import tasks from '../../api/tasks';

export const types = {
  GET_TASKS: 'GET_TASKS',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_FAILURE: 'GET_TASKS_FAILURE',
  CREATE_TASK: 'CREATE_TASK',
  CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
  CREATE_TASK_FAILURE: 'CREATE_TASK_FAILURE',
  UPDATE_TASK: 'UPDATE_TASK',
  UPDATE_TASK_SUCCESS: 'UPDATE_TASK_SUCCESS',
  UPDATE_TASK_FAILURE: 'UPDATE_TASK_FAILURE',
  DELETE_TASK: 'DELETE_TASK',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_FAILURE: 'DELETE_TASK_FAILURE',
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
  createOne: (data) => {
    return async (dispatch) => {
      dispatch({type: types.CREATE_TASK});
      try {
        const response = await tasks.createOne(data);
        const result = response.data;
        dispatch({type: types.CREATE_TASK_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.CREATE_TASK_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
  updateOne: (data) => {
    return async (dispatch) => {
      dispatch({type: types.UPDATE_TASK});
      try {
        const response = await tasks.updateOne(data);
        const result = response.data;
        dispatch({type: types.UPDATE_TASK_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.UPDATE_TASK_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
  deleteOne: (id) => {
    return async (dispatch) => {
      dispatch({type: types.DELETE_TASK});
      try {
        const response = await tasks.deleteOne(id);
        const result = response.data.id;
        dispatch({type: types.DELETE_TASK_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.DELETE_TASK_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
};
