const express = require('express');
const app = express();

app.use(express.static('__dirname + \'/dist\''));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});