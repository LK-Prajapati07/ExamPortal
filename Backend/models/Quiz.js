// models/Quiz.js
import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    totalQuestions: { type: Number, default: 0 },
    difficulty: { type: String, enum: ["easy", "medium", "hard", "mixed"], default: "mixed" },
    duration: { type: Number, default: 30 },
    status: { type: String, enum: ["draft", "generating", "ready", "published", "archived"], default: "draft" },
    proctored: { type: Boolean, default: false },
    passingScore: { type: Number, default: 40 },
    sourceLabel: { type: String, default: null },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);