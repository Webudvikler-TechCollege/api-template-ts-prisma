import { Router } from 'express';
import { getRecords, getRecord, updateRecord, deleteRecord } from '../controllers/userController';
import { createRecord } from '../controllers/reservationController';

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

export const userRoutes = router;
