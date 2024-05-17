import { HttpError } from '../helpers/HttpError.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import {
  addEvent,
  findEvent,
  getEventById,
  getEvents,
} from '../services/eventsServices.js';

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12, ...sortingParams } = req.query;
  const skip = (page - 1) * limit;

  const sortingKeys = ['sortByTitle', 'sortByEventDate', 'sortByOrganaizer'];
  const sortingKey = Object.keys(sortingParams).find(key =>
    sortingKeys.includes(key)
  );

  const { events, totalEvents } = await getEvents(
    { skip, limit },
    sortingParams,
    sortingKey
  );

  res.json({ events, totalEvents });
};

const getEvent = async (req, res) => {
  const { id } = req.params;

  const result = await getEventById({ _id: id });

  res.json(result);
};

const createEvent = async (req, res) => {
  const { title } = req.body;

  const isExist = await findEvent({ title });

  if (isExist)
    throw HttpError(400, 'Event with same title has already created');

  const result = await addEvent(req.body);

  res.status(201).json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  getEvent: ctrlWrapper(getEvent),
  createEvent: ctrlWrapper(createEvent),
};
