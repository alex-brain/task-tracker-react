import * as api from '../../../api';
import * as actions from '../../actions';

export const types = {
  CHANGE: 'CHANGE',
  RESET: 'RESET',
  SUBMIT: 'SUBMIT',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_FAILURE: 'SUBMIT_FAILURE',
};

export default {

  change: (data) => {
    return dispatch => {
      dispatch({
        type: types.CHANGE,
        payload: data,
      });
    };
  },

  reset: () => {
    return dispatch => {
      dispatch({type: types.RESET});
    };
  },

  submit: (data) => {
    return async dispatch => {
      dispatch({type: types.SUBMIT});
      try {
        const response = await api.users.login(data.login, data.password);
        if (response.data.error) {
          throw response.data.error;
        }
        const result = response.data.user;
        await dispatch(actions.session.save({user: result}));
        dispatch({type: types.SUBMIT_SUCCESS, payload: result});
        return result;
      } catch (e) {
        if (e) {
          dispatch({type: types.SUBMIT_FAILURE, errors: e});
        } else {
          throw e;
        }
      }
    };
  },
};
