import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import * as actions from '../../store/actions';
import { Home, Login, CreateTaskContainer } from '../index';

class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  fetchData = () => {
    return Promise.all([
      this.props.dispatch(actions.tasks.getList()),
      this.props.dispatch(actions.priority.getList())
    ]);
  };

  componentDidMount() {
    if (!this.props.session.user.id && this.props.location !== '/login') {
      this.props.history.replace('/login');
    }
    this.fetchData();
  }

  render() {
    return (
      <Fragment>
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/create" exact={true} component={CreateTaskContainer}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default connect(state => ({
  session: state.session
}))(App);
