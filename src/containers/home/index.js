import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { LayoutPage } from '../../components/layouts';
import { TaskList } from '../../components/elements';


class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  render() {
    const { tasks } = this.props;

    return (
      <LayoutPage header={<h2>Список задач</h2>}>
        <TaskList items={tasks} onChangeTaskActive={()=> {}} />
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list,
  session: state.session
}))(Home))
