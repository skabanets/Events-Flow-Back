import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import { addEvent } from '../services/eventsServices.js';

const createEvent = async (req, res) => {
  const result = await addEvent({ ...req.body });

  res.status(201).json(result);
};

export default {
  createEvent: ctrlWrapper(createEvent),
};
