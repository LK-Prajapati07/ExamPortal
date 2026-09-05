// ai/prompts/difficultyClassifier.prompt.js
import { PromptTemplate } from "@langchain/core/prompts";

export const difficultyClassifierPrompt = PromptTemplate.fromTemplate(`
Classify the difficulty of the following multiple-choice question as
"easy", "medium", or "hard", based on the reasoning depth required
(not just sentence length).

Question: {question}
Options: {options}
Correct answer index: {correctOptionIndex}

Respond with only the difficulty label.
`);