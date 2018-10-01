import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LayoutField } from '../../layouts';
import { Input, Textarea, Select } from '../../elements';

class FormTask extends Component {

  static propTypes = {
    data: PropTypes.object,
    priority: PropTypes.object,
    options: PropTypes.array,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    buttons: PropTypes.node
  };

  onChange = name => {
    return (value) => {
      const data = {...this.props.data, [name]: value};
      this.props.onChange(data);
    };
  };

  render() {
    const { data, options, errors, buttons } = this.props;
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
            label={'Важность задачи'}
            input={<Select
              options={options}
              data={data.priority}
              onChange={this.onChange('priority')}
              theme={'short'}
            />}
            error={errors.priority}
          >
          </LayoutField>
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