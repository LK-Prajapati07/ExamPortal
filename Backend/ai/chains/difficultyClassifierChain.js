// ai/chains/difficultyClassifierChain.js
import { ChatOpenAI } from "@langchain/openai";
import { difficultyClassifierPrompt } from "../prompts/difficultyClassifier.prompt.js";

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });

export const difficultyClassifierChain = {
  invoke: async ({ question, options, correctOptionIndex }) => {
    const prompt = await difficultyClassifierPrompt.format({
      question,
      options: options.join(" | "),
      correctOptionIndex,
    });
    const response = await model.invoke(prompt);
    const label = response.content.trim().toLowerCase();
    return ["easy", "medium", "hard"].includes(label) ? label : "medium";
  },
};