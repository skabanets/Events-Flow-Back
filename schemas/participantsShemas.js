import Joi from "joi";

export const craeteParticipantSchema = Joi.object({
  fullName: Joi.string().min(8).required().messages({
    "string.min": "The fullName must contain at least {#limit} characters.",
    "any.required": "fullName is required",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "email is required",
  }),
  dateOfBirth: Joi.date().required().messages({
    "any.required": "dateOfBirth is required",
  }),
  dateOfRegistrations: Joi.date().required().messages({
    "any.required": "dateOfRegistrations is required",
  }),
  eventSource: Joi.string()
    .valid("Social media", "Friends", "Found myself")
    .required()
    .messages({
      "any.required": " eventSource is required",
    }),
  eventId: Joi.string().required().messages({
    "any.required": "eventId is required",
  }),
});
