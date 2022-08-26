import { Router } from 'express';
import Controller from '../../controllers/User.controller';

const routes = Router();

routes.post('/', Controller.createUser);

export default routes;
