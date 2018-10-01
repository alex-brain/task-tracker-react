import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {themes} from '../../../utils';
import './style.scss';

class Input extends React.Component {

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]).isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    focused: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    autocomplete: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    onBlur: () => {
    },
    onChange: () => {
    },
    onFocus: () => {
    },
    onKeyDown: () => {
    },
    disabled: false,
    type: 'text'
  };

  onChange = (e) => {
    const value = e.target.value;
    return this.props.onChange(value);
  };

  onFocus = (e) => {
    this.props.onFocus(e);
  };

  onKeyDown = (e) => {
    this.props.onKeyDown(e);
  };

  onBlur = () => this.props.onBlur();

  render() {
    const {type, placeholder, required, focused, value, theme, disabled, tabIndex, autocomplete, checked} = this.props;

    return (
      <div className={cn("Input", themes('Input', theme))}>
        <input
          className="Input__input"
          value={value}
          type={type}
          placeholder={placeholder}
          tabIndex={tabIndex}
          checked={checked}
          disabled={disabled}
          required={required}
          autoFocus={focused}
          autoComplete={autocomplete ? 'on' : 'off'}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}


export default Input;
