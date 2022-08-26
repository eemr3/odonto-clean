import * as express from 'express';
import UserRoutes from '../routes/User/User.routes';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Estamos no ar!! :) ');
});

app.use('/users', UserRoutes);

export default app;
