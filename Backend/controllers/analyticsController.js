// controllers/analyticsController.js
import Attempt from "../models/Attempt.js";
import Question from "../models/Question.js";
import CheatFlag from "../models/CheatFlag.js";
import { success } from "../utils/apiResponse.js";

export const getQuizAnalytics = async (req, res) => {
  const { quizId } = req.params;

  const attempts = await Attempt.find({ quiz: quizId, status: "submitted" });
  const avgScore = attempts.length
    ? attempts.reduce((sum, a) => sum + a.percentage, 0) / attempts.length
    : 0;

  const flaggedCount = await CheatFlag.countDocuments({
    attempt: { $in: attempts.map((a) => a._id) },
    flagged: true,
  });

  return success(res, {
    message: "Quiz analytics fetched",
    data: {
      totalAttempts: attempts.length,
      averageScore: Math.round(avgScore),
      flaggedCount,
    },
  });
};

export const getQuestionDifficultyStats = async (req, res) => {
  const { quizId } = req.params;

  const questions = await Question.find({ quiz: quizId });
  const attempts = await Attempt.find({ quiz: quizId, status: "submitted" }).select("answers");

  const stats = questions.map((q) => {
    const relevant = attempts.flatMap((a) => a.answers.filter((ans) => ans.question.toString() === q._id.toString()));
    const correctCount = relevant.filter((a) => a.correct).length;
    const accuracy = relevant.length ? Math.round((correctCount / relevant.length) * 100) : null;

    return {
      questionId: q._id,
      difficulty: q.difficulty,
      attempts: relevant.length,
      accuracy,
    };
  });

  return success(res, { message: "Question stats fetched", data: stats });
};

export const getStudentProgress = async (req, res) => {
  const attempts = await Attempt.find({ student: req.user._id, status: "submitted" })
    .populate("quiz", "title")
    .sort({ createdAt: 1 });

  return success(res, { message: "Progress fetched", data: attempts });
};