// sockets/examSocket.js
import Attempt from "../models/Attempt.js";
import { logger } from "../utils/logger.js";

export const registerExamSocket = (io, socket) => {
  // Student joins their own exam room when starting an attempt
  socket.on("exam:join", ({ attemptId }) => {
    socket.join(`attempt:${attemptId}`);
    logger.info(`Student ${socket.user._id} joined exam room for attempt ${attemptId}`);
  });

  // Teacher/admin joins the monitoring room to watch live proctor events for an attempt
  socket.on("exam:monitor", ({ attemptId }) => {
    if (!["teacher", "admin"].includes(socket.user.role)) return;
    socket.join(`quiz-monitor:${attemptId}`);
  });

  // Server-initiated forced termination (e.g. cheat score crossed hard threshold)
  socket.on("exam:force-submit", async ({ attemptId, reason }) => {
    if (!["teacher", "admin"].includes(socket.user.role)) return;

    await Attempt.findByIdAndUpdate(attemptId, { status: "terminated", submittedAt: new Date() });
    io.to(`attempt:${attemptId}`).emit("exam:terminated", { reason });
  });

  socket.on("exam:heartbeat", ({ attemptId }) => {
    // keep-alive ping from client during exam — useful for detecting disconnects
    socket.to(`quiz-monitor:${attemptId}`).emit("exam:heartbeat", { attemptId, at: new Date() });
  });
};