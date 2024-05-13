import { Participant } from '../models/Participant.js';

export const addParticipant = async data => {
  const newParticipant = await Participant.create(data);
  return newParticipant;
};
