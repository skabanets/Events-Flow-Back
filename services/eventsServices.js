import { Event } from '../models/Event.js';

export const addEvent = async data => {
  const newEvent = await Event.create(data);
  return newEvent;
};
