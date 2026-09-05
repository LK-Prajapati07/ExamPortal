// sockets/proctorSocket.js
import ProctorLog from "../models/ProctorLog.js";
import { cheatScoreQueue } from "../jobs/cheatScoreQueue.js";
import { proctorEventSchema } from "../utils/validators.js";
import { logger } from "../utils/logger.js";

export const registerProctorSocket = (io, socket) => {
  socket.on("proctor:event", async (payload, ack) => {
    const result = proctorEventSchema.safeParse(payload);
    if (!result.success) {
      return ack?.({ success: false, message: "Invalid event payload" });
    }

    const { attemptId, type, meta } = result.data;

    try {
      await ProctorLog.create({ attempt: attemptId, type, meta });
      await cheatScoreQueue.add("recalculate", { attemptId });

      ack?.({ success: true });

      // Notify the teacher's room (joined via examSocket) for live monitoring
      io.to(`quiz-monitor:${attemptId}`).emit("proctor:live-event", { attemptId, type, meta, at: new Date() });
    } catch (err) {
      logger.error(`[proctorSocket] failed to log event: ${err.message}`);
      ack?.({ success: false, message: "Failed to log event" });
    }
  });

  socket.on("proctor:join-attempt", ({ attemptId }) => {
    socket.join(`attempt:${attemptId}`);
  });
};