const express = require('express');
const handleRender = require('./handleRender.jsx');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/', handleRender);

app.listen(3001, () => {


});
