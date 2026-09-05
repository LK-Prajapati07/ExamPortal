// services/mcqGenService.js
import mcqGenerationGraph from "../ai/graphs/mcqGenerationGraph.js";
import Question from "../models/Question.js";

export const generateMcqsForQuiz = async ({ quizId, sourceId, topic, numQuestions = 10 }) => {
  const result = await mcqGenerationGraph.invoke({
    sourceId,
    topic,
    numQuestions,
  });

  const questionDocs = result.validQuestions.map((q, i) => ({
    quiz: quizId,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    difficulty: q.difficulty,
    generatedBy: "ai",
    order: i,
  }));

  const saved = await Question.insertMany(questionDocs);
  return saved;
};