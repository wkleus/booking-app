import mongoose, { Schema, type InferSchemaType } from "mongoose";

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true, // YYYY-MM-DD
    },
    time: {
      type: String,
      required: true, // HH:mm
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    occasion: {
      type: String,
      enum: ["Birthday", "Anniversary", "Other"] as const,
      default: "Other",
    },
  },
  {
    timestamps: true,
  },
);

// Infer TypeScript type from schema
export type Reservation = InferSchemaType<typeof reservationSchema> & {
  _id: mongoose.Types.ObjectId;
};

export default mongoose.model("Reservation", reservationSchema);
