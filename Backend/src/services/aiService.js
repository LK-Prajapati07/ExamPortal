
// src/services/aiService.js
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import Question from "../model/question.model.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateQuestionsFromAI = async (
  subject,
  difficulty,
  count,
  createdBy = "system_ai"
) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Generate exactly ${count} multiple-choice questions for ${subject} at ${difficulty} level.
Return strictly a raw JSON array of objects with the exact keys:
- "questionText": string
- "options": array of 4 strings
- "correctAnswer": string

Example format:
[
  {
    "questionText": "What is the speed of light?",
    "options": ["3x10^8 m/s", "3x10^6 m/s", "1.5x10^8 m/s", "3x10^5 m/s"],
    "correctAnswer": "3x10^8 m/s"
  }
]`,
      config: {
        responseMimeType: "application/json"
      }
    });

    let rawText = response.text ? response.text.trim() : "";
    
    // Clean up markdown formatting if present
    if (rawText.startsWith("```json")) {
      rawText = rawText.replace(/^```json/, "").replace(/```$/, "").trim();
    } else if (rawText.startsWith("```")) {
      rawText = rawText.replace(/^```/, "").replace(/```$/, "").trim();
    }

    const parsedData = JSON.parse(rawText);

    // Ensure we have an array (handle cases where AI wraps it in an object like { questions: [...] })
    let questionList = [];
    if (Array.isArray(parsedData)) {
      questionList = parsedData;
    } else if (Array.isArray(parsedData.questions)) {
      questionList = parsedData.questions;
    } else if (Array.isArray(parsedData.data)) {
      questionList = parsedData.data;
    } else {
      // Fallback: search for any array value inside the object
      const foundArray = Object.values(parsedData).find((val) => Array.isArray(val));
      questionList = foundArray || [];
    }

    if (questionList.length === 0) {
      throw new Error("AI did not return a valid array of questions");
    }

    // Map fields directly to Question schema
    const questionsToSave = questionList.map((q) => ({
      subject,
      difficulty,
      questionText: q.questionText || q.question || q.prompt || "",
      options: q.options,
      correctAnswer: q.correctAnswer,
      // createdBy
    }));
    console.log(questionsToSave)
    return questionsToSave;
    // const savedQuestions = await Question.insertMany(questionsToSave);
    // return savedQuestions;
  } catch (error) {
    console.error("Error generating and saving questions:", error.message);
    throw error;
  }
};

























// last code
// import "dotenv/config";
// import { GoogleGenAI } from "@google/genai";
// import Question from "../model/question.model.js";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// export const generateQuestionsFromAI = async (
//   subject,
//   difficulty,
//   count,
//   createdBy = "system_ai" 
// ) => {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-3.6-flash",
//       contents: `Generate ${count} multiple-choice questions for ${subject} at ${difficulty} level. Return strictly a JSON array with objects containing: question, options (array of 4 strings), and correctAnswer.`,
//       config: {
//         responseMimeType: "application/json"
//       }
//     });

//     const parsedQuestions = JSON.parse(response.text);
//     const questionsToSave = parsedQuestions.map((q) => ({
//       subject,
//       difficulty,
//       questionText: q.question,
//       options: q.options,
//       correctAnswer: q.correctAnswer,
//       createdBy: createdBy     
//     }));
//     console.log(questionsToSave)
//     // removed inserting into database for now
//     // const savedQuestions = await Question.insertMany(questionsToSave);
//     // return savedQuestions;
//   } catch (error) {
//     console.error("Error generating and saving questions:", error);
//     throw error;
//   }
// };