import { Event } from '../models/Event.js';

export const getEvents = async (query = {}) => {
  const event = await Event.find(
    {},
    'title description eventDate organaizer participants',
    query
  );
  return event;
};

export const addEvent = async data => {
  const newEvent = await Event.create(data);
  return newEvent;
};
