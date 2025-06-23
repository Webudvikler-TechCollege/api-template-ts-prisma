import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/stageController';

const routes = Router();
routes.get('/', getRecords);
routes.get('/:id', getRecord);

export const stageRoutes = routes;
