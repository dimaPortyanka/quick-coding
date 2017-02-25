import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import BasicPage from './BasicPage';
import HomePage from './HomePage';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={BasicPage}>
      <IndexRedirect to="park-it" />
      <Route path="park-it" component={HomePage} />
    </Route>
    <Route path="*" component={() => <div>404!<br /><a href="/">go home</a></div>} />
  </Router>
);
