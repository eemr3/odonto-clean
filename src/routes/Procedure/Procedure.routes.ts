import { Router } from 'express';
import Controller from '../../controllers/Procedure.controller';

const router = Router();

router.post('/', Controller.createProcedure);

export default router;
