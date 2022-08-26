import 'express-async-errors';
import express from 'express';
import Routes from '../routes/';
import { handleError } from '../middlewares/handleError';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Estamos no ar!! :) ');
});

app.use('/users', Routes.UserRoutes);
app.use('/login', Routes.LoginRoutes);
app.use('/patients', Routes.PatientRoutes);
app.use('/payments', Routes.PaymentRoutes);

app.use(handleError);
export default app;
