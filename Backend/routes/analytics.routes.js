// routes/analytics.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  getQuizAnalytics,
  getQuestionDifficultyStats,
  getStudentProgress,
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/quizzes/:quizId", authMiddleware, roleMiddleware("teacher", "admin"), getQuizAnalytics);
router.get(
  "/quizzes/:quizId/questions",
  authMiddleware,
  roleMiddleware("teacher", "admin"),
  getQuestionDifficultyStats
);
router.get("/me/progress", authMiddleware, roleMiddleware("student"), getStudentProgress);

export default router;