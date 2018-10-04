import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { TaskRowDetail, TaskRowShort } from '../index';
import './style.scss';

class TaskItem extends Component {

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
      priority: PropTypes.string,
      dueTime: PropTypes.string,
      executionTime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    }),
    viewMode: PropTypes.string
  };

  getFormattedDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formatter =  new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    return formatter.format(date);
  };

  getTaskOverdue = (dueTime) => {
    const taskDueTime = new Date(dueTime);
    const currentTime = new Date();
    return taskDueTime < currentTime;
  };

  renderTask = () => {
    const { data, viewMode } = this.props;
    const { title, description, status, priority, dueTime, executionTime, id } = data;
    const formattedDueTime = dueTime ? this.getFormattedDateTime(dueTime) : '';
    const formattedExecutionTime= executionTime ? this.getFormattedDateTime(executionTime) : '';
    if (viewMode === 'подробный') {
      return (
        <TaskRowDetail
          cells={[
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{status}</Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>
              {title}
              {this.getTaskOverdue(dueTime) &&(
                <div className="TaskItem__warning">
                  Срок выполнения задачи истек!
                </div>
              )}
            </Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{description}</Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{priority}</Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{formattedDueTime}</Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{formattedExecutionTime}</Link>,
          ]}
        />
      )
    } else if (viewMode === 'краткий') {
      return (
        <TaskRowShort
          cells={[
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{status}</Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>
              {title}
              {this.getTaskOverdue(dueTime) &&(
                <div className="TaskItem__warning">
                  Срок выполнения задачи истек!
                </div>
              )}
            </Link>,
            <Link to={{ pathname: `/update/${id}`, state: {data} }}>{priority}</Link>,
          ]}
        />
      )
    }
  };

  render() {
    return (
      <div className={cn("TaskItem", {'TaskItem_theme_red': this.getTaskOverdue(this.props.data.dueTime)})}>
        {this.renderTask()}
      </div>
    );
  }
}

export default TaskItem;