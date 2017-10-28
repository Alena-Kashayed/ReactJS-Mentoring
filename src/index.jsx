import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { films, currentFilm, sortBy } from './reducers';

import App from './App';

const reducer = combineReducers({
  films,
  currentFilm,
  sortBy,
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
));

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

), document.getElementById('root'));
