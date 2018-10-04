import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Checkbox extends Component {

  static propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  onChange = (e) => {
    const value = e.target.value;
    return this.props.onChange(value);
  };

  render() {
    const { label, checked } = this.props;
    return (
      <div className="Checkbox">
        <label>
          <input type="checkbox" checked={checked} onChange={this.onChange}/>
          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;