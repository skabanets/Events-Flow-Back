import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/participant-constans";

const ParticipantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    dateOfRegistrations: {
      type: Date,
      required: [true, "Date of registrations is required"],
    },
    eventSource: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
      required: [true, "Event source is required"],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "EventId is required"],
    },
  },
  { versionKey: false }
);

export const Participant = model("Participant", ParticipantSchema);
