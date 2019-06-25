import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Todo from './pages/Todo';
import Simple from './pages/Simple';

export default class RouteContent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Todo" component={Todo} />
        <Route exact path="/Simple" component={Simple} />
        <Redirect path="/" to={{ pathname: '/Todo' }} />
      </Switch>
    );
  }
}
