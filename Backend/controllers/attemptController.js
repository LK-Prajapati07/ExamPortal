// controllers/attemptController.js
import Attempt from "../models/Attempt.js";
import Quiz from "../models/Quiz.js";
import { gradeAttempt } from "../services/gradingService.js";
import { notifyQuizCompleted } from "../services/notificationService.js";
import { success, failure } from "../utils/apiResponse.js";

export const startAttempt = async (req, res) => {
  const { quizId } = req.body;

  const quiz = await Quiz.findById(quizId);
  if (!quiz || quiz.status !== "published") {
    return failure(res, { statusCode: 400, message: "Quiz not available" });
  }

  const existing = await Attempt.findOne({ quiz: quizId, student: req.user._id, status: "in-progress" });
  if (existing) return success(res, { message: "Resuming existing attempt", data: existing });

  const attempt = await Attempt.create({
    quiz: quizId,
    student: req.user._id,
    totalQuestions: quiz.totalQuestions,
  });

  return success(res, { statusCode: 201, message: "Attempt started", data: attempt });
};

export const submitAttempt = async (req, res) => {
  const { attemptId } = req.params;
  const { answers } = req.body;

  const attempt = await gradeAttempt(attemptId, answers);
  const quiz = await Quiz.findById(attempt.quiz);

  await notifyQuizCompleted({
    userEmail: req.user.email,
    quizTitle: quiz?.title,
    score: attempt.score,
    totalQuestions: attempt.totalQuestions,
  });

  return success(res, { message: "Attempt submitted", data: attempt });
};

export const getAttempt = async (req, res) => {
  const attempt = await Attempt.findById(req.params.id).populate("answers.question");
  if (!attempt) return failure(res, { statusCode: 404, message: "Attempt not found" });

  if (attempt.student.toString() !== req.user._id.toString() && req.user.role === "student") {
    return failure(res, { statusCode: 403, message: "Not authorized" });
  }

  return success(res, { message: "Attempt fetched", data: attempt });
};

export const listMyAttempts = async (req, res) => {
  const attempts = await Attempt.find({ student: req.user._id }).populate("quiz", "title duration");
  return success(res, { message: "Attempts fetched", data: attempts });
};