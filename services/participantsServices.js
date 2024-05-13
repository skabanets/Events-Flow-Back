import { Participant } from '../models/Participant.js';

export const getParticipants = async (filter = {}) => {
  const participants = await Participant.find(filter);
  return participants;
};

export const addParticipant = async data => {
  const newParticipant = await Participant.create(data);
  return newParticipant;
};
