import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { LayoutPage } from '../../components/layouts';
import { Home } from '../index';

class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <LayoutPage header={<h2>UI Task Tracker</h2>}>
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
          </Switch>
        </Router>
      </LayoutPage>
    );
  }
}

export default App;
