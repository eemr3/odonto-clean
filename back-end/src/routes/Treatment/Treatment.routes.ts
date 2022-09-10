import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import Controller from '../../controllers/Treatment.controller';

const router = Router();

router.post('/', authMiddleware, Controller.createTreatment);
router.get('/', authMiddleware, Controller.getAllTreatments);
router.get('/search', authMiddleware, Controller.getSumTreatmentByPeriod);

export default router;
