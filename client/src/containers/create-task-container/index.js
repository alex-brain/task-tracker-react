import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { Header } from '../index';
import { LayoutPage } from '../../components/layouts';
import { FormTask } from '../../components/forms';
import { FormCreateTaskButtons } from '../../components/elements';

class CreateTaskContainer extends Component {

  static propTypes = {
    formCreateTask: PropTypes.object,
    priority: PropTypes.array,
    statuses: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  onSubmit = () => {
    const submitSuccess = this.props.dispatch(actions.formCreateTask.submit(this.props.formCreateTask.data));
    if (submitSuccess) {
      this.props.history.push('/');
    }
  };

  onReset = () => {
    this.props.dispatch(actions.formCreateTask.reset());
  };

  onChange = (data) => {
    this.props.dispatch(actions.formCreateTask.change(data));
  };

  render() {
    const { priority, statuses } =  this.props;
    const { data, errors } = this.props.formCreateTask;
    return (
      <LayoutPage header={<Header text={'Создание задачи'}/>}>
        <FormTask
          data={data}
          priority={priority}
          statuses={statuses}
          errors={errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          buttons={<FormCreateTaskButtons onReset={this.onReset} onClick={this.onSubmit}/>}
        />
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({
  formCreateTask: state.formCreateTask,
  priority: state.priority.list,
  statuses: state.statuses.list
}))(CreateTaskContainer))
