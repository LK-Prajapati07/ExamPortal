// routes/attempt.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { generalLimiter } from "../middlewares/rateLimiter.js";
import { validate, attemptSubmitSchema } from "../utils/validators.js";
import {
  startAttempt,
  submitAttempt,
  getAttempt,
  listMyAttempts,
} from "../controllers/attemptController.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("student"), generalLimiter, startAttempt);
router.post(
  "/:attemptId/submit",
  authMiddleware,
  roleMiddleware("student"),
  validate(attemptSubmitSchema),
  submitAttempt
);

router.get("/me", authMiddleware, roleMiddleware("student"), listMyAttempts);
router.get("/:id", authMiddleware, getAttempt);

export default router;