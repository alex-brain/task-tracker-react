import priority from '../../api/priority';

export const priorityTypes = {
  GET_PRIORITY: 'GET_PRIORITY',
  GET_PRIORITY_SUCCESS: 'GET_PRIORITY_SUCCESS',
  GET_PRIORITY_FAILURE: 'GET_PRIORITY_FAILURE'
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: priorityTypes.GET_PRIORITY});
      try {
        const response = await priority.getList();
        const result = response.data;
        dispatch({type: priorityTypes.GET_PRIORITY_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: priorityTypes.GET_PRIORITY_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  }
};
