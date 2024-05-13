import Joi from "joi";

export const createEventSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    "string.min": "The title must contain at least {#limit} characters.",
    "any.required": "title is required",
  }),
  description: Joi.string().min(12).required().messages({
    "string.min": "The description must contain at least {#limit} characters.",
    "any.required": "description is required",
  }),
  eventDate: Joi.date().required().messages({
    "any.required": "eventDate is required",
  }),
  organaizer: Joi.string().min(3).required().messages({
    "string.min": "The organaizer must contain at least {#limit} characters.",
    "any.required": "organaizer is required",
  }),
});
