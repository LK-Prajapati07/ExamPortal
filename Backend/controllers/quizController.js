// controllers/quizController.js
import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";
import { mcqGenQueue } from "../jobs/mcqGenQueue.js";
import { success, failure } from "../utils/apiResponse.js";

export const createQuiz = async (req, res) => {
  const { title, sourceId, topic, numQuestions, duration, proctored } = req.body;

  const quiz = await Quiz.create({
    title,
    createdBy: req.user._id,
    duration,
    proctored,
    status: "draft",
    sourceLabel: sourceId,
  });

  await mcqGenQueue.add("generate", {
    quizId: quiz._id.toString(),
    sourceId,
    topic,
    numQuestions,
  });

  return success(res, {
    statusCode: 201,
    message: "Quiz created, generation queued",
    data: quiz,
  });
};

export const getQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).populate("questions");
  if (!quiz) return failure(res, { statusCode: 404, message: "Quiz not found" });
  return success(res, { message: "Quiz fetched", data: quiz });
};

export const listQuizzes = async (req, res) => {
  const filter = req.user.role === "student" ? { status: "published" } : { createdBy: req.user._id };
  const quizzes = await Quiz.find(filter).select("-questions");
  return success(res, { message: "Quizzes fetched", data: quizzes });
};

export const reviewQuestion = async (req, res) => {
  const { questionId } = req.params;
  const { reviewed, question, options, correctOptionIndex, explanation } = req.body;

  const updated = await Question.findByIdAndUpdate(
    questionId,
    {
      ...(reviewed !== undefined && { reviewed }),
      ...(question && { question }),
      ...(options && { options }),
      ...(correctOptionIndex !== undefined && { correctOptionIndex }),
      ...(explanation && { explanation }),
    },
    { new: true }
  );

  if (!updated) return failure(res, { statusCode: 404, message: "Question not found" });
  return success(res, { message: "Question updated", data: updated });
};

export const publishQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).populate("questions");
  if (!quiz) return failure(res, { statusCode: 404, message: "Quiz not found" });

  const allReviewed = quiz.questions.every((q) => q.reviewed);
  if (!allReviewed) {
    return failure(res, { statusCode: 400, message: "All questions must be reviewed before publishing" });
  }

  quiz.status = "published";
  await quiz.save();

  return success(res, { message: "Quiz published", data: quiz });
};