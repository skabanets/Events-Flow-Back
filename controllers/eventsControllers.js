import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import { addEvent, getEvents } from '../services/eventsServices.js';

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12 } = req.body;
  const skip = (page - 1) * limit;

  const result = await getEvents({ skip, limit });

  res.json(result);
};

const createEvent = async (req, res) => {
  const result = await addEvent({ ...req.body });

  res.status(201).json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  createEvent: ctrlWrapper(createEvent),
};
