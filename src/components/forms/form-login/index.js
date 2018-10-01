import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LayoutField } from '../../layouts';
import { Input, Button } from '../../elements';
import './style.scss';

class FormLogin extends Component {

  static propTypes = {
    data: PropTypes.object,
    priority: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
  };

  onChange = name => {
    return (value) => {
      const data = {...this.props.data, [name]: value};
      this.props.onChange(data);
    };
  };

  onClick = () => {
    this.props.onSubmit();
  };

  render() {
    const { data, errors, onReset } = this.props;
    return (
      <div className="FormLogin">
        <div className="FormLogin__fields">
          <LayoutField
            label={'Логин'}
            input={<Input type="text" placeholder={'Логин'} value={data.login} onChange={this.onChange('login')}/>}
            error={errors.login}
          >
          </LayoutField>
          <LayoutField
            label={'Пароль'}
            input={<Input type="password" value={data.password} placeholder={'Пароль'} onChange={this.onChange('password')}/>}
            error={errors.password}
          >
          </LayoutField>
        </div>
        <div className="FormLogin__buttons">
          <div className="FormLogin__reset-btn">
            <Button onClick={onReset}>
              Очистить
            </Button>
          </div>
          <div className="FormLogin__login-btn">
            <Button theme={'green'} onClick={this.onClick}>
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLogin;