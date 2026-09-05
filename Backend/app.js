// app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";

import authRoutes from "./routes/auth.routes.js";
import documentRoutes from "./routes/document.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
import attemptRoutes from "./routes/attempt.routes.js";
import proctorRoutes from "./routes/proctor.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";
import { generalLimiter } from "./middlewares/rateLimiter.js";
import { initSockets } from "./sockets/index.js";

const app = express();
const httpServer = createServer(app);

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(generalLimiter);

app.get("/health", (req, res) => res.json({ success: true, message: "OK" }));

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/attempts", attemptRoutes);
app.use("/api/proctor", proctorRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

initSockets(httpServer);

export { app, httpServer };