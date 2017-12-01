import React from 'react';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { films, currentFilm, sortBy, loader } from '../src/reducers';

import App from '../src/App';

const renderFullPage = (html, preloadedState) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>ReactJS mentoring</title>
      <style>
        html {
          height: 100%;
        }
        body {
          margin: 0;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          height: 100%;
        }
        #root {
          height: 100%;
        }
      </style>
      <link href="/style_daa921b1cb6b1b748eaf.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
      </script>
      <script type="text/javascript" src="/main_daa921b1cb6b1b748eaf.js"></script>
    </body>
  </html>
`;

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

const handleRender = (req, res) => {
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>);
  res.send(renderFullPage(html, preloadedState));
};

export default handleRender;
