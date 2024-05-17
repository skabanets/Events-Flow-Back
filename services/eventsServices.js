import { Event } from '../models/Event.js';

export const getEvents = async (query = {}, sortingParams = {}, sortingKey) => {
  const sortingOptions = {};

  if (sortingKey) {
    const key = sortingKey.substring(6).toLowerCase();
    sortingOptions[key === 'eventdate' ? 'eventDate' : key] =
      sortingParams[sortingKey] === 'true' ? 1 : -1;
  }

  let eventsQuery = Event.find(
    {},
    'title description eventDate organaizer participants',
    query
  );

  if (sortingKey) {
    eventsQuery = eventsQuery.sort(sortingOptions);
  }

  const totalEvents = await Event.countDocuments();
  const events = await eventsQuery.exec();

  return { events, totalEvents };
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
