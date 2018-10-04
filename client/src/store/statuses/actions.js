import statuses from '../../api/statuses';

export const statusTypes = {
  GET_STATUSES: 'GET_STATUSES',
  GET_STATUSES_SUCCESS: 'GET_STATUSES_SUCCESS',
  GET_STATUSES_FAILURE: 'GET_STATUSES_FAILURE'
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: statusTypes.GET_STATUSES});
      try {
        const response = await statuses.getList();
        const result = response.data;
        dispatch({type: statusTypes.GET_STATUSES_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: statusTypes.GET_STATUSES_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  }
};
