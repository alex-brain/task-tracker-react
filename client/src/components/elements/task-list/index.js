import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from '../../lists';
import { TaskItem, TaskRowDetail, TaskRowShort } from '../index';
import './style.scss';

class TaskList extends Component {

  static propTypes = {
    items: PropTypes.array,
    viewMode: PropTypes.string
  };

  renderItem = (item) => (
    <TaskItem
      data={item}
      viewMode={this.props.viewMode}
    />
  );

  renderHeader = () => {
    const { viewMode } = this.props;
    if (viewMode === 'подробный') {
      return (
        <TaskRowDetail
          cells={[
            'Статус',
            'Название',
            'Описание',
            'Важность',
            'Ожидаемое время выполнения',
            'Время закрытия задачи',
          ]}
          theme={'header'}
        />
      )
    } else if (viewMode === 'краткий') {
      return (
        <TaskRowShort
          cells={[
            'Статус',
            'Название',
            'Важность',
          ]}
          theme={'header'}
        />
      )
    }
  };

  render() {
    const { items } = this.props;
    return (
      <div className="TaskList">
        {this.renderHeader()}
        <List
          items={items}
          renderItem={this.renderItem}
          getItemId={item => item.id}
        />
        <div className="TaskList__create-task-link">
          <Link to={'/create'}>Новая задача</Link>
        </div>
      </div>
    );
  }
}

export default TaskList;