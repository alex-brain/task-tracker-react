import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class LayoutPage extends Component {

  static propTypes = {
    header: PropTypes.node,
    children: PropTypes.node
  };

  render() {
    const { header, children} = this.props;
    return (
      <div className="LayoutPage">
        <div className="LayoutPage__header">
          {header}
        </div>
        <div className="LayoutPage__content">
          {children}
        </div>
      </div>
    );
  }
}

export default LayoutPage;