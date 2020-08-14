import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:country" component={Country} exact />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
