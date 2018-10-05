import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { LayoutHeader } from '../../components/layouts';
import { Button } from '../../components/elements';


class Header extends Component {

  static propTypes = {
    text: PropTypes.node
  };

  renderRight = () => {
    if (this.props.session.user.id) {
      return (
        <Button onClick={this.onClickLogout} theme={'blue'}>Выйти</Button>
      )
    }
  };

  onClickLogout = () => {
    this.props.dispatch(actions.session.clear());
  };

  render() {
    const {text} = this.props;
    return (
      <LayoutHeader
        right={this.renderRight()}
        center={text}
      />
    );
  }
}

export default connect(state => ({
  session: state.session,
}))(Header);
