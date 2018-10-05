import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../index';
import './style.scss';

class TaskFilter extends Component {

  static propTypes = {
    onChangeTaskFilterPriority: PropTypes.func,
    priority: PropTypes.array,
    statuses: PropTypes.array,
    data: PropTypes.object,
  };

  onChange = (key, value) => {
    return () => {
      this.props.onChangeTaskFilterPriority(key, value);
    };
  };

  getCheckBoxChecked = (key, item) => {
    const { data } = this.props;
    return data[key].indexOf(item) !== -1;
  };

  render() {
    const { priority, statuses } = this.props;

    return (
      <div className="TaskFilter">
        <div className="TaskFilter__priority">
          <div className="TaskFilter__label">
            Приоритет:
          </div>
          <div className="TaskFilter__checkboxes">

              <Checkbox
                label={'любой'}
                onChange={this.onChange('priority', 'любой')}
                checked={this.getCheckBoxChecked('priority', 'любой')}
              />
              {priority.map((item, index) => (
                <Checkbox
                  key={index}
                  label={item}
                  onChange={this.onChange('priority', item)}
                  checked={this.getCheckBoxChecked('priority', item)}
                />
              ))}
          </div>
        </div>
        <div className="TaskFilter__statuses">
          <div className="TaskFilter__label">
            Статус:
          </div>
          <div className="TaskFilter__checkboxes">
            <Checkbox
              label={'любой'}
              onChange={this.onChange('statuses', 'любой')}
              checked={this.getCheckBoxChecked('statuses', 'любой')}
            />
            {statuses.map((item, index) => (
              <Checkbox
                key={index}
                label={item}
                onChange={this.onChange('statuses', item)}
                checked={this.getCheckBoxChecked('statuses', item)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskFilter;