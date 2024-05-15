import { HttpError } from '../helpers/HttpError.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import { findEvent } from '../services/eventsServices.js';
import {
  addParticipant,
  getParticipants,
} from '../services/participantsServices.js';

const getAllParticipants = async (req, res) => {
  const result = await getParticipants(req.query);

  res.json(result);
};

const createParticipant = async (req, res) => {
  const { email, eventId } = req.body;

  const event = await findEvent({ _id: eventId });
  if (!event) throw HttpError(404, 'Event not found!');

  const participants = await getParticipants({ email });

  const isExistParticipant = participants.find(
    item => item.eventId.toString() === eventId
  );

  if (isExistParticipant)
    throw HttpError(
      404,
      'The user with this email is already registered for this event!'
    );

  const participant = await addParticipant(req.body);

  event.participants.push(participant._id);
  await event.save();

  res.status(201).json(participant);
};

export default {
  getAllParticipants: ctrlWrapper(getAllParticipants),
  createParticipant: ctrlWrapper(createParticipant),
};
