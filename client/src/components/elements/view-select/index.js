import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../../elements';
import './style.scss';

class ViewSelect extends Component {

  static propTypes = {
    data: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  render() {
    const { data, options, onChange } = this.props;
    return (
      <div className="ViewSelect">
        <div className="ViewSelect__label">
          Вид отображения:
        </div>
        <div className="ViewSelect__select">
          <Select
            options={options}
            data={data}
            onChange={onChange}
            theme={'short'}
          />
        </div>
      </div>
    );
  }
}

export default ViewSelect;