// services/gradingService.js
import Question from "../models/Question.js";
import Attempt from "../models/Attempt.js";

export const gradeAttempt = async (attemptId, submittedAnswers) => {
  const attempt = await Attempt.findById(attemptId);
  if (!attempt) throw new Error("Attempt not found");

  const questionIds = submittedAnswers.map((a) => a.questionId);
  const questions = await Question.find({ _id: { $in: questionIds } });
  const questionMap = new Map(questions.map((q) => [q._id.toString(), q]));

  let score = 0;
  const gradedAnswers = submittedAnswers.map((a) => {
    const q = questionMap.get(a.questionId);
    const correct = q ? q.correctOptionIndex === a.selectedOptionIndex : false;
    if (correct) score++;

    return {
      question: a.questionId,
      selectedOptionIndex: a.selectedOptionIndex,
      correct,
      timeTakenSeconds: a.timeTakenSeconds ?? null,
    };
  });

  const percentage = Math.round((score / questions.length) * 100);

  attempt.answers = gradedAnswers;
  attempt.score = score;
  attempt.totalQuestions = questions.length;
  attempt.percentage = percentage;
  attempt.status = "submitted";
  attempt.submittedAt = new Date();
  await attempt.save();

  return attempt;
};