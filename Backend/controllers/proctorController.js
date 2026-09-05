// controllers/proctorController.js
import ProctorLog from "../models/ProctorLog.js";
import CheatFlag from "../models/CheatFlag.js";
import { cheatScoreQueue } from "../jobs/cheatScoreQueue.js";
import { success, failure } from "../utils/apiResponse.js";

// Complements the socket path — useful for clients that batch events over REST
// instead of keeping a live socket connection.
export const logProctorEvent = async (req, res) => {
  const { attemptId, type, meta } = req.body;

  const log = await ProctorLog.create({ attempt: attemptId, type, meta });
  await cheatScoreQueue.add("recalculate", { attemptId });

  return success(res, { statusCode: 201, message: "Event logged", data: log });
};

export const getCheatFlag = async (req, res) => {
  const { attemptId } = req.params;
  const flag = await CheatFlag.findOne({ attempt: attemptId });
  if (!flag) return failure(res, { statusCode: 404, message: "No cheat flag record found" });
  return success(res, { message: "Cheat flag fetched", data: flag });
};

export const reviewCheatFlag = async (req, res) => {
  const { attemptId } = req.params;
  const { reviewStatus, reviewNotes } = req.body;

  const flag = await CheatFlag.findOneAndUpdate(
    { attempt: attemptId },
    { reviewStatus, reviewNotes, reviewedBy: req.user._id },
    { new: true }
  );

  if (!flag) return failure(res, { statusCode: 404, message: "Cheat flag not found" });
  return success(res, { message: "Cheat flag reviewed", data: flag });
};