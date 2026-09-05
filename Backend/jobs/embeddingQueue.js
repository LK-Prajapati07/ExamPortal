// jobs/embeddingQueue.js
import { Queue, Worker } from "bullmq";
import { connection } from "../config/redis.js";
import { extractTextFromS3 } from "../services/ingestionService.js";
import { chunkText } from "../services/chunkingService.js";
import { embedAndStore } from "../services/embeddingService.js";
import { logger } from "../utils/logger.js";

export const embeddingQueue = new Queue("embedding", { connection });

export const embeddingWorker = new Worker(
  "embedding",
  async (job) => {
    const { sourceId, bucket, key, fileType } = job.data;

    logger.info(`[embeddingQueue] starting sourceId=${sourceId}`);

    const { text, totalPages } = await extractTextFromS3({ bucket, key, fileType });
    const chunks = await chunkText(text);
    const stored = await embedAndStore(chunks, sourceId);

    logger.info(`[embeddingQueue] done sourceId=${sourceId} chunks=${stored}`);
    return { sourceId, totalChunks: stored, totalPages };
  },
  { connection, concurrency: 3 }
);

embeddingWorker.on("failed", (job, err) => {
  logger.error(`[embeddingQueue] failed job=${job?.id} error=${err.message}`);
});