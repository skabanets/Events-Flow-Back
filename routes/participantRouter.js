import express from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import participantControllers from '../controllers/ParticipantControllers.js';
import { craeteParticipantSchema } from '../schemas/participantsShemas.js';

export const participantRouter = express.Router();

participantRouter.post(
  '/',
  validateBody(craeteParticipantSchema),
  participantControllers.createParticipant
);
