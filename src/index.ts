import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes';
import { genreRoutes } from './routes/genreRoutes';
import { stageRoutes } from './routes/stageRoutes';
import { eventRoutes } from './routes/eventRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/users', userRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/stages', stageRoutes);
app.use('/api/events', eventRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
