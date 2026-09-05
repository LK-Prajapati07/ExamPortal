// models/CheatFlag.js
import mongoose from "mongoose";

const cheatFlagSchema = new mongoose.Schema(
  {
    attempt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attempt",
      required: true,
      unique: true,
      index: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
    breakdown: [
      {
        type: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          default: 0,
        },
        weight: {
          type: Number,
          required: true,
        },
        subtotal: {
          type: Number,
          required: true,
        },
      },
    ],
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    reviewStatus: {
      type: String,
      enum: ["pending", "confirmed-cheating", "cleared", "not-reviewed"],
      default: "not-reviewed",
    },
    reviewNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("CheatFlag", cheatFlagSchema);