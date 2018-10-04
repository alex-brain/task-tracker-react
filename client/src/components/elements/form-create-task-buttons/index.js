import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../elements';
import './style.scss';

class FormCreateTaskButtons extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    onReset: PropTypes.func
  };

  render() {
    const { onClick, onReset } = this.props;
    return (
      <div className="FormCreateTaskButtons">
        <div className="FormCreateTaskButtons__open-task-list-link">
          <Link to={'/'}>Вернуться к списку задач</Link>
        </div>
        <div className="FormCreateTaskButtons__reset-btn">
          <Button onClick={onReset}>
            Очистить
          </Button>
        </div>
        <div className="FormCreateTaskButtons__create-btn">
          <Button theme={'green'} onClick={onClick}>
            Создать задачу
          </Button>
        </div>
      </div>
    );
  }
}

export default FormCreateTaskButtons;