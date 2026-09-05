import mongoose from "mongoose";
import Question from "../models/question.model.js";

export const startExam = async (req, res) => {
  try {
    const { subject, difficulty, count = 5 } = req.query;

    const matchFilter = {};
    if (subject) matchFilter.subject = new RegExp(`^${subject}$`, "i");
    if (difficulty) matchFilter.difficulty = new RegExp(`^${difficulty}$`, "i");

    const questions = await Question.aggregate([
      { $match: matchFilter },
      { $sample: { size: parseInt(count, 10) } },
      {
        $project: {
          _id: 1,
          subject: 1,
          difficulty: 1,
          questionText: 1,
          options: 1
        }
      }
    ]);

    return res.status(200).json({
      success: true,
      totalQuestions: questions.length,
      data: questions
    });
  } catch (error) {
    console.error("Exam Start Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to initialize exam",
      error: error.message
    });
  }
};

export const submitExam = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Submission must include a non-empty array of answers."
      });
    }

    const questionIds = answers
      .filter((a) => mongoose.Types.ObjectId.isValid(a.questionId))
      .map((a) => new mongoose.Types.ObjectId(a.questionId));

    const dbQuestions = await Question.find({ _id: { $in: questionIds } })
      .select("+correctAnswer")
      .lean();

    const dbQuestionMap = new Map(
      dbQuestions.map((q) => [q._id.toString(), q])
    );

    let score = 0;
    const results = answers.map((submission) => {
      const original = dbQuestionMap.get(submission.questionId);

      if (!original) {
        return {
          questionId: submission.questionId,
          status: "Not Found",
          isCorrect: false
        };
      }

      const isCorrect = original.correctAnswer.trim() === submission.selectedOption?.trim();
      if (isCorrect) score += 1;

      return {
        questionId: original._id,
        questionText: original.questionText,
        selectedOption: submission.selectedOption || null,
        correctAnswer: original.correctAnswer, // Reveal only after submission
        isCorrect
      };
    });

    return res.status(200).json({
      success: true,
      summary: {
        totalAnswered: answers.length,
        score,
        percentage: Math.round((score / answers.length) * 100)
      },
      review: results
    });
  } catch (error) {
    console.error("Exam Submission Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to evaluate exam",
      error: error.message
    });
  }
};