import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';
import { eventsRouter, participantRouter } from './routes/index.js';

const { PORT = 3000, DB_URL } = process.env;

export const app = express();

app.use(morgan('tiny'));
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://events-flow.vercel.app'],
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/events', eventsRouter);
app.use('/api/participants', participantRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
