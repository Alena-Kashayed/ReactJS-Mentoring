import express from 'express';
import handleRender from './handleRender';

const app = express();

app.use(express.static('dist'));

app.get('/', handleRender);

app.listen(3001, () => {
  console.log('Listen port 3001');
});
