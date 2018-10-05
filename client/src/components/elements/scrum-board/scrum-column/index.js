import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrumItem from '../scrum-item';
import {DropTarget} from 'react-dnd';
import './style.scss';

class ScrumColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {cards: props.list};
  }

  static propTypes = {
    status: PropTypes.string,
    list: PropTypes.array,
    moveTask: PropTypes.func
  };

  render() {
    const { list } = this.props;
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;

    const backgroundColor = isActive ? '#eee' : '#fff';

    return connectDropTarget(
      <div style={{backgroundColor}} className="ScrumColumn">
        {list.map((card, i) => {
          return (
            <ScrumItem
              key={card.id}
              index={i}
              status={this.props.status}
              card={card}
              moveCard={this.moveCard}/>
          );
        })}
      </div>
    );
  }
}

const cardTarget = {
  drop(props, monitor) {
    const { status } = props;
    const sourceObj = monitor.getItem();
    if (status !== sourceObj.status) {
      props.moveTask(sourceObj, props);
    }
    return {
      status: status
    };
  }
};

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(ScrumColumn);