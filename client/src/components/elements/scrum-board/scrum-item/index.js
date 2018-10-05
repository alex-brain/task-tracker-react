import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import './style.scss';

class ScrumItem extends Component {

  static propTypes = {
    key: PropTypes.number,
    card: PropTypes.object,
    index: PropTypes.number,
    status: PropTypes.string,
    moveCard: PropTypes.func,
  };

  render() {
    const { card, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{ opacity }} className="ScrumItem">
        <Link to={{ pathname: `/update/${card.id}`, state: {data:card} }}>{card.title}</Link>
      </div>
    ));
  }
}

const cardSource = {

  beginDrag(props) {
    return {
      index: props.index,
      status: props.status,
      card: props.card
    };
  }
};

const cardTarget = {

  hover( props, monitor, component ) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceStatus = monitor.getItem().status;

    const hoverStatus = props.status;

    if (sourceStatus === hoverStatus) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    if ( props.status === sourceStatus ) {
      props.moveCard(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;
    }
  }
};

export default flow(
  DropTarget("CARD", cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource("CARD", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(ScrumItem);