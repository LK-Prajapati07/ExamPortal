// jobs/cheatScoreQueue.js
import { Queue, Worker } from "bullmq";
import { connection } from "../config/redis.js";
import { recalculateCheatScore } from "../services/proctorService.js";
import { notifyCheatFlagged } from "../services/notificationService.js";
import Attempt from "../models/Attempt.js";
import { logger } from "../utils/logger.js";

export const cheatScoreQueue = new Queue("cheat-score", { connection });

export const cheatScoreWorker = new Worker(
  "cheat-score",
  async (job) => {
    const { attemptId } = job.data;

    const { score, flagged } = await recalculateCheatScore(attemptId);

    if (flagged) {
      const attempt = await Attempt.findById(attemptId).populate("student quiz");
      await notifyCheatFlagged({
        teacherEmail: attempt.quiz?.createdBy?.email,
        studentName: attempt.student?.name,
        quizTitle: attempt.quiz?.title,
        cheatScore: score,
      });
    }

    return { attemptId, score, flagged };
  },
  { connection, concurrency: 5 }
);

cheatScoreWorker.on("failed", (job, err) => {
  logger.error(`[cheatScoreQueue] failed job=${job?.id} error=${err.message}`);
});