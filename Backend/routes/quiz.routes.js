// routes/quiz.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { mcqGenLimiter, generalLimiter } from "../middlewares/rateLimiter.js";
import { validate, quizCreateSchema } from "../utils/validators.js";
import {
  createQuiz,
  getQuiz,
  listQuizzes,
  reviewQuestion,
  publishQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("teacher", "admin"),
  mcqGenLimiter,
  validate(quizCreateSchema),
  createQuiz
);

router.get("/", authMiddleware, generalLimiter, listQuizzes);
router.get("/:id", authMiddleware, generalLimiter, getQuiz);

router.patch(
  "/questions/:questionId",
  authMiddleware,
  roleMiddleware("teacher", "admin"),
  reviewQuestion
);

router.post("/:id/publish", authMiddleware, roleMiddleware("teacher", "admin"), publishQuiz);

export default router;