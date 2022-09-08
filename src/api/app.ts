import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import Routes from '../routes/';
import { handleError } from '../middlewares/handleError';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public/images'));

app.use('/images', express.static('public/images'));

app.get('/', (_req, res) => {
  res.send('Estamos no ar!! :) ');
});

app.use('/users', Routes.UserRoutes);
app.use('/login', Routes.LoginRoutes);
app.use('/patients', Routes.PatientRoutes);
app.use('/treatments', Routes.Treatment);

app.use(handleError);
export default app;
