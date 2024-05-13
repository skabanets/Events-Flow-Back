import { Schema } from "mongoose";

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    eventDate: {
      type: Date,
      required: [true, "Event date is required"],
    },
    organaizer: {
      type: String,
      required: [true, "Organaizer is required"],
    },
    participants: [{ type: Schema.Types.ObjectId, ref: "Participant" }],
  },
  { versionKey: false }
);

export const Event = model("Event", EventSchema);
