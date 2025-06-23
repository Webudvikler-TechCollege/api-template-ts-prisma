import { Router } from 'express';
import { getRecord } from '../controllers/reservationController';
import { createRecord, deleteRecord, getRecords, updateRecord } from '../controllers/reservationController';

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

export const userRoutes = router;
