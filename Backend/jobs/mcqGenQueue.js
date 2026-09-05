// jobs/mcqGenQueue.js
import { Queue, Worker } from "bullmq";
import { connection } from "../config/redis.js";
import { generateMcqsForQuiz } from "../services/mcqGenService.js";
import Quiz from "../models/Quiz.js";
import { logger } from "../utils/logger.js";

export const mcqGenQueue = new Queue("mcq-generation", { connection });

export const mcqGenWorker = new Worker(
  "mcq-generation",
  async (job) => {
    const { quizId, sourceId, topic, numQuestions } = job.data;

    logger.info(`[mcqGenQueue] generating quizId=${quizId}`);
    await Quiz.findByIdAndUpdate(quizId, { status: "generating" });

    const questions = await generateMcqsForQuiz({ quizId, sourceId, topic, numQuestions });

    await Quiz.findByIdAndUpdate(quizId, {
      status: "ready",
      totalQuestions: questions.length,
      $push: { questions: { $each: questions.map((q) => q._id) } },
    });

    logger.info(`[mcqGenQueue] done quizId=${quizId} generated=${questions.length}`);
    return { quizId, generated: questions.length };
  },
  { connection, concurrency: 2 }
);

mcqGenWorker.on("failed", async (job, err) => {
  logger.error(`[mcqGenQueue] failed job=${job?.id} error=${err.message}`);
  if (job?.data?.quizId) {
    await Quiz.findByIdAndUpdate(job.data.quizId, { status: "draft" });
  }
});