import { Router } from 'express';
import Controller from '../../controllers/Payment.controller';

const router = Router();

router.post('/', Controller.createPayment);
router.get('/', Controller.getAllPayment);

export default router;
