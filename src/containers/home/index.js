import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { withRouter } from "react-router-dom";

class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(actions.tasks.getList());
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list
}))(Home))
