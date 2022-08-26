import { Router } from 'express';
import Controller from '../../controllers/Payment.controller';

const router = Router();

router.post('/', Controller.createPayment);

export default router;
