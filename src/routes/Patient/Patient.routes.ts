import { Router } from 'express';
import Controller from '../../controllers/Patient.controller';

const router = Router();

router.get('/:id', Controller.getPatientById);
router.post('/', Controller.createPatient);

export default router;
