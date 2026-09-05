// models/ProctorLog.js
import mongoose from "mongoose";

const proctorLogSchema = new mongoose.Schema(
  {
    attempt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attempt",
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: [
        "tab-switch",
        "face-not-detected",
        "multiple-faces",
        "copy-paste",
        "fullscreen-exit",
        "window-blur",
        "right-click",
        "devtools-opened",
        "noise-detected",
      ],
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
   
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProctorLog", proctorLogSchema);