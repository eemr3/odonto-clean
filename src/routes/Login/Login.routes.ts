import { Router } from 'express';
import Controller from '../../controllers/Login.controller';
const router = Router();

router.post('/', Controller.signIn);

export default router;
