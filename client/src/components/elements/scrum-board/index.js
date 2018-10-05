import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ScrumColumn from './scrum-column';
import { TaskRowShort } from '../index';
import './style.scss';

class ScrumBoard extends Component {

  static propTypes = {
    items: PropTypes.array,
    moveTask: PropTypes.func
  };

  getTasksByStatus = (status) => {
    const { items } = this.props;
    return items.filter(item => item.status === status);
  };

  moveTask = (dragCard, hoverCard) => {
    this.props.moveTask(dragCard, hoverCard);
  };
 
  render() {
    return (
      <div className="ScrumBoard">
        <div className="ScrumBoard__header">
          <TaskRowShort
            cells={[
              'План',
              'В процессе',
              'Готово',
            ]}
            theme={'header'}
          />
        </div>
        <div className="ScrumBoard__columns">
          <ScrumColumn moveTask={this.moveTask} status="план" list={this.getTasksByStatus('план')} />
          <ScrumColumn moveTask={this.moveTask} status="в процессе" list={this.getTasksByStatus('в процессе')} />
          <ScrumColumn moveTask={this.moveTask} status="готово" list={this.getTasksByStatus('готово')} />
        </div>
      </div>
    );
  }
}
 
export default DragDropContext(HTML5Backend)(ScrumBoard);