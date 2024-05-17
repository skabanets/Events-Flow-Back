import Joi from 'joi';
import { emailRegexp } from '../constants/participant-constants.js';

export const craeteParticipantSchema = Joi.object({
  fullName: Joi.string().min(8).required().messages({
    'string.min': 'The fullName must contain at least {#limit} characters.',
    'any.required': 'fullName is required',
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': 'email is required',
  }),
  dateOfBirth: Joi.date().max('now').required().messages({
    'date.max': 'dateOfBirth cannot be in the future.',
    'any.required': 'dateOfBirth is required',
  }),
  dateOfRegistration: Joi.date().required().messages({
    'any.required': 'dateOfRegistration is required',
  }),
  eventSource: Joi.string()
    .valid('Social media', 'Friends', 'Found myself')
    .required()
    .messages({
      'any.only':
        'eventSource must be one of them options: Social media, Friends, Found myself',
      'any.required': ' eventSource is required',
    }),
  eventId: Joi.string().required().messages({
    'any.required': 'eventId is required',
  }),
});
