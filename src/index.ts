import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes';
import { productRoutes } from './routes/productRoutes';
import { authRoutes } from './routes/authRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Gør public-mappen tilgængelig som statisk
app.use('/assets', express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
