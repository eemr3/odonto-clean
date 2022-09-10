import { celebrate } from 'celebrate';
import { Router } from 'express';
import Controller from '../../controllers/Login.controller';
import { loginSchema } from '../../schemas/celebrate.schema';
const router = Router();

router.post('/', celebrate(loginSchema), Controller.signIn);

export default router;
