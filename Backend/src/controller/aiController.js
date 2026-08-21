import { generateQuestionsFromAI } from "../services/aiService.js";
import Question from "../model/question.model.js";

export const createQuestions = async (req, res) => {
  try {
    const { subject, difficulty, count } = req.body;

    const rawQuestions = await generateQuestionsFromAI(subject, difficulty, count);

    const formattedQuestions = rawQuestions.map(q => ({
      subject,
      difficulty,
      questionText: q.questionText,
      options: q.options,
      correctAnswer: q.correctAnswer,
      // createdBy: req.user.uid 
    }));

    res.status(201).json({ success: true, data: formattedQuestions });
    // const savedQuestions = await Question.insertMany(formattedQuestions);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};