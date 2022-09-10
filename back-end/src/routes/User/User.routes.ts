import { celebrate } from 'celebrate';
import { Router } from 'express';
import { createUser } from '../../schemas/celebrate.schema';
import Controller from '../../controllers/User.controller';

const routes = Router();

routes.post('/', celebrate(createUser), Controller.createUser);

export default routes;
