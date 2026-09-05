// ai/prompts/mcqGeneration.prompt.js
import { PromptTemplate } from "@langchain/core/prompts";

export const mcqPrompt = PromptTemplate.fromTemplate(`
You are an expert exam writer. Generate {numQuestions} multiple-choice questions
based ONLY on the context below. Do not use outside knowledge.

Rules:
- Each question must have exactly 4 options.
- Exactly one option is correct.
- Distractors must be plausible, not silly or obviously wrong.
- Avoid "all of the above" / "none of the above" options.
- Vary difficulty across easy, medium, hard.
- Provide a short explanation for why the correct answer is correct.

Context:
{context}
`);