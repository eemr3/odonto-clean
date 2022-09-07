import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import Controller from '../../controllers/Payment.controller';

const router = Router();

router.post('/', authMiddleware, Controller.createPayment);
router.get('/', authMiddleware, Controller.getAllPayment);
router.get('/search', Controller.getPaymentByPeriod);

export default router;
