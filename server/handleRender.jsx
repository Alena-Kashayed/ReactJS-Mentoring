import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const renderFullPage = html => `
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
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
`;

const handleRender = (req, res) => {
  const html = renderToString(<App />);
  res.send(renderFullPage(html));
};

export default handleRender;
