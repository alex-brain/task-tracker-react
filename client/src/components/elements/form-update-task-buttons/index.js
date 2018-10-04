import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../elements';
import './style.scss';

class FormUpdateTaskButtons extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    onDelete: PropTypes.func
  };

  render() {
    const { onClick, onDelete } = this.props;
    return (
      <div className="FormUpdateTaskButtons">
        <div className="FormUpdateTaskButtons__open-task-list-link">
          <Link to={'/'}>Вернуться к списку задач</Link>
        </div>
        <div className="FormUpdateTaskButtons__delete-btn">
          <Button onClick={onDelete} theme={'red'}>
            Удалить задачу
          </Button>
        </div>
        <div className="FormUpdateTaskButtons__update-btn">
          <Button theme={'green'} onClick={onClick}>
            Сохранить изменения
          </Button>
        </div>
      </div>
    );
  }
}

export default FormUpdateTaskButtons;