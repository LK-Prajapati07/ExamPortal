// config/redis.js
import IORedis from "ioredis";
import { env } from "./env.js";

export const connection = new IORedis(env.redisUrl, {
  maxRetriesPerRequest: null, // required by BullMQ
});

connection.on("error", (err) => console.error("Redis error:", err.message));