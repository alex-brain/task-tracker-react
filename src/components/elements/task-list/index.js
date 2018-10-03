import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from '../../lists';
import { TaskItem, TaskRow } from '../index';
import './style.scss';

class TaskList extends Component {

  static propTypes = {
    items: PropTypes.array,
    onChangeTaskActive: PropTypes.func
  };

  renderItem = (item) => (
    <TaskItem
      data={item}
      onChangeTaskActive={this.props.onChangeTaskActive}
    />
  );

  render() {
    const { items } = this.props;
    return (
      <div className="TaskList">
        <TaskRow
          cells={[
            'Выполнено',
            'Название',
            'Описание',
            'Важность',
            'Ожидаемое время выполнения',
            'Время закрытия задачи',
          ]}
          theme={'header'}
        />
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