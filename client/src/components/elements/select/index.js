import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {themes} from '../../../utils';
import './style.scss';

export default class Select extends Component {

  static propTypes = {
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    options: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    onChange: () => {
    }
  };

  onChange = (e) => {
    e.preventDefault();
    this.props.onChange(e.target.options[e.target.selectedIndex].value);
  };

  render() {
    const { theme, options, data, label, disabled } = this.props;
    return (
      <div className={cn('Select', themes('Select', theme))}>
        <select
          onChange={this.onChange}
          className="Select__select"
          value={data}
          disabled={disabled}>
          {label && (
            <option value={''} className="Select__option" disabled>
              {label}
            </option>
          )}
          {
            options && options.map((item, index) => {
              return (
                <option value={item} className="Select__option" key={index}>
                  {item}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}
