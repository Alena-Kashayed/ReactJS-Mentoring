import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { StaticRouter as Router } from 'react-router-dom';
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

ReactDOM.hydrate((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

), document.getElementById('root'));
