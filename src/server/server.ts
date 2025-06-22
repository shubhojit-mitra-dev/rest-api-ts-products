import userRoutes from '@/routes/user.routes';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

export default app;
