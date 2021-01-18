import { Schema } from 'mongoose';

export const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: false }

  },
  {
    timestamps: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);
