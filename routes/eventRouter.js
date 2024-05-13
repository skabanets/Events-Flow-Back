import express from 'express';
import eventsControllers from '../controllers/eventsControllers.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createEventSchema } from '../schemas/eventsSchemas.js';

export const eventsRouter = express.Router();

eventsRouter.get('/', eventsControllers.getAllEvents);

eventsRouter.post(
  '/',
  validateBody(createEventSchema),
  eventsControllers.createEvent
);
