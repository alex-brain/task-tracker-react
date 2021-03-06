import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { LayoutPage } from '../../components/layouts';
import { Header } from '../index';
import { TaskList, TaskFilter, ViewSelect, ScrumBoard } from '../../components/elements';

class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    taskFilter: PropTypes.object,
    viewSelect: PropTypes.object,
    priority: PropTypes.array,
    statuses: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  timer = null;

  componentWillMount() {
    this.fetchData();
    this.timer = setInterval(()=> {
      this.props.dispatch(actions.tasks.getList());
    }, 120000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  moveTask = (dragCard, hoverCard) => {
    const updatedTask = {...dragCard.card, status: hoverCard.status};
    this.props.dispatch(actions.tasks.updateOne(updatedTask));

  };

  fetchData = () => {
    return Promise.all([
      this.props.dispatch(actions.tasks.getList()),
      this.props.dispatch(actions.priority.getList()),
      this.props.dispatch(actions.statuses.getList())
    ]);
  };

  onChangeTaskFilterPriority = (key, value) => {
    let data = this.props.taskFilter.data;
    const index = data[key].indexOf(value);
    if (index !== -1) {
      if (value !== 'любой'){
        data[key].splice(index, 1);
      } else {
        data[key] = [];
      }
    } else {
      if (value !== 'любой'){
        data[key].push(value);
      } else {
        data[key] = ['любой', ...this.props[key]];
      }
    }
    this.props.dispatch(actions.taskFilter.change(data));
  };

  onChangeViewSelect = (data) => {
    this.props.dispatch(actions.viewSelect.change(data));
  };

  getFilteredTasks = () => {
    const { tasks, taskFilter } = this.props;
    return tasks.filter(item => {
      return taskFilter.data.priority.indexOf(item.priority) !== -1 &&
        taskFilter.data.statuses.indexOf(item.status) !== -1;
    });
  };

  render() {
    const { taskFilter, viewSelect, priority, statuses } = this.props;
    const filteredTasks = this.getFilteredTasks();

    return (
      <LayoutPage header={<Header text={'Список задач'}/>}>
        <ViewSelect
          data={viewSelect.data}
          options={viewSelect.options}
          onChange={this.onChangeViewSelect}
        />
        <TaskFilter
          onChangeTaskFilterPriority={this.onChangeTaskFilterPriority}
          data={taskFilter.data}
          priority={priority}
          statuses={statuses}
        />
        {viewSelect.data !== 'scrum доска' ? (
          <TaskList items={filteredTasks} viewMode={viewSelect.data}/>
        ) : (
          <div>
            <ScrumBoard items={filteredTasks} moveTask={this.moveTask} />
          </div>
        )}
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list,
  session: state.session,
  taskFilter: state.taskFilter,
  priority: state.priority.list,
  statuses: state.statuses.list,
  viewSelect: state.viewSelect
}))(Home));
