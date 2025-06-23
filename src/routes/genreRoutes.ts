import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/genreController';

const routes = Router();
routes.get('/', getRecords);
routes.get('/:id', getRecord);

export const genreRoutes = routes;
