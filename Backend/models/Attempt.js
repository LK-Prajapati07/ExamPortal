// models/Attempt.js
import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
      index: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    answers: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOptionIndex: {
          type: Number,
          min: 0,
          max: 3,
          default: null,
        },
        correct: {
          type: Boolean,
          default: null,
        },
        timeTakenSeconds: {
          type: Number,
          default: null,
        },
      },
    ],
    score: {
      type: Number,
      default: null,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      enum: ["in-progress", "submitted", "auto-submitted", "terminated"],
      default: "in-progress",
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
      default: null,
    },
    cheatScore: {
      type: Number,
      default: 0,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attempt", attemptSchema);