import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/eventController';

const routes = Router();
routes.get('/', getRecords);
routes.get('/:id', getRecord);

export const eventRoutes = routes;