import * as express from 'express';
import Routes from '../routes/';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Estamos no ar!! :) ');
});

app.use('/users', Routes.UserRoutes);

export default app;
