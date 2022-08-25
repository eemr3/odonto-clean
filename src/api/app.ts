import * as express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Estamos no ar!! :) ');
});

export default app;
