import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes } from '../../../utils';
import './style.scss';

export default class List extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    getItemId: PropTypes.func,
    columnNumber: PropTypes.number,
    height: PropTypes.number,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  static defaultProps = {
    theme: 'default',
    columnNumber: 1
  };

  render() {
    const { renderItem, items, columnNumber, theme, getItemId } = this.props;
    const itemStyle = { width: `calc(100% / ${columnNumber}` };
    return (
      <ul className={cn('List', {'List_wrap': columnNumber}, themes('List', theme))}>
        {items.map((item, index) => (
          <li
            key={getItemId ? getItemId(item) : index}
            className="List__item"
            style={columnNumber ? itemStyle : null}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
  }
}
