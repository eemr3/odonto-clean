import { Router } from 'express';
import { createUser } from '../../controllers/User.controller';

const routes = Router();

routes.post('/', createUser);

export default routes;
