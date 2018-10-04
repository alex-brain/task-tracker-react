import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {themes} from '../../../utils';
import './style.scss';

class TaskRow extends Component {

  static propTypes = {
    cells: PropTypes.arrayOf(PropTypes.node),
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  render() {
    const { cells, theme } = this.props;
    return (
      <div className="TaskRow">
        <div className={cn(`TaskRow__cell TaskRow__cell_theme_bg`, themes('TaskRow__cell', theme))}>{cells[0]}</div>
        <div className={cn(`TaskRow__cell TaskRow__cell_theme_bg`, themes('TaskRow__cell', theme))}>{cells[1]}</div>
        <div className={cn(`TaskRow__cell TaskRow__cell_theme_bg`, themes('TaskRow__cell', theme))}>{cells[2]}</div>
      </div>
    );
  }
}

export default TaskRow;