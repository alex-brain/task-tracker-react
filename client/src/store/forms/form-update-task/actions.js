import { tasks } from '../../actions';

export const types = {
  FORM_UPDATE_TASK_CHANGE: 'FORM_UPDATE_TASK_CHANGE',
  FORM_UPDATE_TASK_RESET: 'FORM_UPDATE_TASK_RESET',
  FORM_UPDATE_TASK_SUBMIT_SUCCESS: 'FORM_UPDATE_TASK_SUBMIT_SUCCESS',
  FORM_UPDATE_TASK_SUBMIT_FAILURE: 'FORM_UPDATE_TASK_SUBMIT_FAILURE',
};

const formUpdateTaskActions = {

  change: (data) => {
    return dispatch => dispatch({
      type: types.FORM_UPDATE_TASK_CHANGE,
      payload: data
    });
  },

  reset: () => {
    return dispatch => dispatch({type: types.FORM_UPDATE_TASK_RESET});
  },

  submit: (data) => {
    return (dispatch) => {
      if (!data.title) {
        const errors = {
          title: 'Название задачи обязательно для ввода!',
        };
        dispatch({type: types.FORM_UPDATE_TASK_SUBMIT_FAILURE, payload: errors});
        return false;
      } else {
        dispatch({type: types.FORM_UPDATE_TASK_SUBMIT_SUCCESS});
        dispatch(tasks.updateOne(data));
        dispatch(formUpdateTaskActions.reset());
        return true;
      }
    };
  }
};

export default formUpdateTaskActions;

