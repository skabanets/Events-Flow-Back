import { Event } from '../models/Event.js';

export const getEvents = async (query = {}) => {
  const events = await Event.find(
    {},
    'title description eventDate organaizer participants',
    query
  );
  return events;
};

export const getEventById = async eventId => {
  const event = await Event.findById(eventId);
  return event;
};

export const addEvent = async data => {
  const newEvent = await Event.create(data);
  return newEvent;
};

export const findEvent = async filter => Event.findOne(filter);

export const getTotalEvents = async () => Event.countDocuments();
