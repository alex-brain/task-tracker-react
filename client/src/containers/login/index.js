import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { Header } from '../index';
import { LayoutPage } from '../../components/layouts';
import { FormLogin } from '../../components/forms';

class Home extends Component {

  static propTypes = {
    formLogin: PropTypes.object,
    session: PropTypes.object,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  componentDidMount() {
    if (this.props.session.user.id) {
      this.props.history.replace('/');
    }
  }

  onReset = () => {
    this.props.dispatch(actions.formLogin.reset());
  };

  onChange = (data) => {
    this.props.dispatch(actions.formLogin.change(data));
  };

  onSubmit = () => {
    const { formLogin, history, dispatch } = this.props;
    dispatch(actions.formLogin.submit(formLogin.data)).then(() => {
      history.replace('/');
    });
  };

  render() {
    const { data, errors } = this.props.formLogin;

    return (
      <LayoutPage header={<Header text={'Авторизация'}/>}>
        <FormLogin
          data={data}
          errors={errors}
          onChange={this.onChange}
          onReset={this.onReset}
          onSubmit={this.onSubmit}
        />
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({
  formLogin: state.formLogin,
  session: state.session
}))(Home))
