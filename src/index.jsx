import React from 'react';
import { hydrate } from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { films, currentFilm, sortBy, loader } from './reducers';

import App from './App';

const reducer = combineReducers({
  films,
  currentFilm,
  sortBy,
  loader,
});

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

hydrate((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
