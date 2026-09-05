// services/proctorService.js
import ProctorLog from "../models/ProctorLog.js";
import CheatFlag from "../models/CheatFlag.js";
import Attempt from "../models/Attempt.js";

const WEIGHTS = {
  "tab-switch": 5,
  "face-not-detected": 3,
  "multiple-faces": 15,
  "copy-paste": 8,
  "fullscreen-exit": 6,
  "window-blur": 4,
  "right-click": 2,
  "devtools-opened": 10,
  "noise-detected": 2,
};

const FLAG_THRESHOLD = 40;

export const recalculateCheatScore = async (attemptId) => {
  const logs = await ProctorLog.find({ attempt: attemptId });

  const counts = {};
  logs.forEach((log) => {
    counts[log.type] = (counts[log.type] || 0) + 1;
  });

  const breakdown = Object.entries(counts).map(([type, count]) => {
    const weight = WEIGHTS[type] || 0;
    return { type, count, weight, subtotal: count * weight };
  });

  const score = breakdown.reduce((sum, b) => sum + b.subtotal, 0);
  const flagged = score > FLAG_THRESHOLD;

  await CheatFlag.findOneAndUpdate(
    { attempt: attemptId },
    { score, flagged, breakdown },
    { upsert: true, new: true }
  );

  await Attempt.findByIdAndUpdate(attemptId, { cheatScore: score, flagged });

  return { score, flagged, breakdown };
};