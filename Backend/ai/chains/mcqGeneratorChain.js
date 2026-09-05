// ai/chains/mcqGeneratorChain.js
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { mcqPrompt } from "../prompts/mcqGeneration.prompt.js";

const QuestionSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string(),
      options: z.array(z.string()).length(4),
      correctOptionIndex: z.number().min(0).max(3),
      explanation: z.string(),
      difficulty: z.enum(["easy", "medium", "hard"]),
    })
  ),
});

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0.4 }).withStructuredOutput(
  QuestionSchema
);

export const mcqGeneratorChain = {
  invoke: async ({ context, numQuestions }) => {
    const prompt = await mcqPrompt.format({ context, numQuestions });
    const result = await model.invoke(prompt);
    return result.questions;
  },
};