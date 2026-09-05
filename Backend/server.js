// server.js
import { app, httpServer } from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { ensureCollection } from "./config/vectorStore.js";
import { logger } from "./utils/logger.js";

// Import workers so BullMQ actually starts processing jobs
import "./jobs/embeddingQueue.js";
import "./jobs/mcqGenQueue.js";
import "./jobs/cheatScoreQueue.js";

const start = async () => {
  try {
    await connectDB();
    await ensureCollection();

    httpServer.listen(env.port, () => {
      logger.info(`Server running on port ${env.port} [${env.nodeEnv}]`);
    });
  } catch (err) {
    logger.error(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
};

process.on("unhandledRejection", (err) => {
  logger.error(`Unhandled rejection: ${err.message}`);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM received, shutting down");
  httpServer.close(() => process.exit(0));
});

start();