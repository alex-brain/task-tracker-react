import { tasks } from '../../actions';

export const types = {
  FORM_CREATE_TASK_CHANGE: 'FORM_CREATE_TASK_CHANGE',
  FORM_CREATE_TASK_RESET: 'FORM_CREATE_TASK_RESET',
  FORM_CREATE_TASK_SUBMIT_SUCCESS: 'FORM_CREATE_TASK_SUBMIT_SUCCESS',
  FORM_CREATE_TASK_SUBMIT_FAILURE: 'FORM_CREATE_TASK_SUBMIT_FAILURE',
};

const formCreateTaskActions = {

  change: (data) => {
    return dispatch => dispatch({
      type: types.FORM_CREATE_TASK_CHANGE,
      payload: data
    });
  },

  reset: () => {
    return dispatch => dispatch({type: types.FORM_CREATE_TASK_RESET});
  },

  submit: (data) => {
    return (dispatch) => {
      if (!data.title) {
        const errors = {
          title: 'Название задачи обязательно для ввода!',
        };
        dispatch({type: types.FORM_CREATE_TASK_SUBMIT_FAILURE, payload: errors});
        return false;
      } else {
        dispatch({type: types.FORM_CREATE_TASK_SUBMIT_SUCCESS});
        const id = Math.round(Math.random() * 1000000);
        dispatch(tasks.createOne({id, ...data}));
        dispatch(formCreateTaskActions.reset());
        return true;
      }
    };
  }
};

export default formCreateTaskActions;

