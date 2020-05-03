import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import ResMovie from '../pages/ResMovie';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/response/:query" component={ResMovie} />
      <Route path="/details/:movie_id" component={Details} />
    </Switch>
  );
}

export default Routes;
