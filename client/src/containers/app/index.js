import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Home, Login, CreateTaskContainer, UpdateTaskContainer } from '../index';

class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {

    return (
      <Fragment>
        <Router history={this.history}>
          <Switch>
            <Route path="/login" exact={true} component={Login}/>
            {!this.props.session.user.id ? <Redirect to={'/login'}/> : null}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/create" exact={true} component={CreateTaskContainer}/>
            <Route path="/update/:id" exact={true} component={UpdateTaskContainer}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default connect(state => ({
  session: state.session
}))(App);
