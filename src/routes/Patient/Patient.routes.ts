import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import Controller from '../../controllers/Patient.controller';

const router = Router();

router.get('/document', authMiddleware, Controller.getPatientByDocument);
router.get('/:id', authMiddleware, Controller.getPatientById);
router.post('/', authMiddleware, Controller.createPatient);

export default router;
