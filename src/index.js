import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import 'index.css';

import Router from './router';
import reducer from './reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger)
}

const store = createStore(reducer, applyMiddleware(
  ...middlewares
));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
