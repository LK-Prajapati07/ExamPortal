// routes/document.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";
import { generalLimiter } from "../middlewares/rateLimiter.js";
import { uploadDocument, getJobStatus } from "../controllers/documentController.js";

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  roleMiddleware("teacher", "admin"),
  uploadMiddleware.single("file"),
  uploadDocument
);

router.get("/jobs/:jobId", authMiddleware, generalLimiter, getJobStatus);

export default router;