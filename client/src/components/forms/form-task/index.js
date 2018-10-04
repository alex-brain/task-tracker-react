import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LayoutField } from '../../layouts';
import { Input, Textarea, Select } from '../../elements';

class FormTask extends Component {

  static propTypes = {
    data: PropTypes.object,
    priority: PropTypes.array,
    statuses: PropTypes.array,
    options: PropTypes.array,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    buttons: PropTypes.node
  };

  onChange = name => {
    return (value) => {
      const data = {...this.props.data, [name]: value};
      if (name === 'status' && value === 'готово') {
        data.executionTime = new Date();
      }
      if (name === 'status' && value !== 'готово') {
        data.executionTime = '';
      }
      this.props.onChange(data);
    };
  };

  render() {
    const { data, priority, statuses, errors, buttons } = this.props;
    return (
      <div className="FormTask">
        <div className="FormTask__fields">
          <LayoutField
            label={'Название задачи'}
            input={<Input type="text" value={data.title} onChange={this.onChange('title')}/>}
            error={errors.title}
          >
          </LayoutField>
          <LayoutField
            label={'Описание задачи'}
            input={<Textarea
              type="text" value={data.description}
              onChange={this.onChange('description')}
            />}
            error={errors.description}
          >
          </LayoutField>
          <LayoutField
            label={'Приоритет'}
            input={<Select
              options={priority}
              data={data.priority}
              onChange={this.onChange('priority')}
              theme={'short'}
            />}
            error={errors.priority}
          />
          <LayoutField
            label={'Статус'}
            input={<Select
              options={statuses}
              data={data.status}
              onChange={this.onChange('status')}
              theme={'short'}
            />}
            error={errors.status}
          />
          <LayoutField
            label={'Ожидаемое время выполнения задачи'}
            input={<Input
              type="datetime-local"
              value={data.dueTime}
              onChange={this.onChange('dueTime')}
              theme={'small'}/>}
            error={errors.dueTime}
          />
        </div>
        {buttons}
      </div>
    );
  }
}

export default FormTask;