import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { Header } from '../index';
import { LayoutPage } from '../../components/layouts';
import { FormTask } from '../../components/forms';
import { FormUpdateTaskButtons } from '../../components/elements';

class UpdateTaskContainer extends Component {

  static propTypes = {
    formUpdateTask: PropTypes.object,
    priority: PropTypes.array,
    statuses: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(actions.formUpdateTask.change(this.props.location.state.data));
  }

  componentWillUnmount() {
    this.props.dispatch(actions.formUpdateTask.reset());
  }

  onSubmit = () => {
    const submitSuccess = this.props.dispatch(actions.formUpdateTask.submit(this.props.formUpdateTask.data));
    if (submitSuccess) {
      this.props.history.push('/');
    }
  };

  onDelete = () => {
    this.props.dispatch(actions.tasks.deleteOne(this.props.location.state.data.id));
    this.props.history.push('/');
  };

  onChange = (data) => {
    this.props.dispatch(actions.formUpdateTask.change(data));
  };

  render() {
    const { priority, statuses } =  this.props;
    const { data, errors } = this.props.formUpdateTask;
    return (
      <LayoutPage header={<Header text={'Задача'}/>}>
        <FormTask
          data={data}
          priority={priority}
          statuses={statuses}
          errors={errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          buttons={<FormUpdateTaskButtons onDelete={this.onDelete} onClick={this.onSubmit}/>}
        />
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({
  formUpdateTask: state.formUpdateTask,
  priority: state.priority.list,
  statuses: state.statuses.list,
}))(UpdateTaskContainer))
