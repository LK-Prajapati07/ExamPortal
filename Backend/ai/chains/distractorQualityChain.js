// ai/chains/distractorQualityChain.js
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const QualitySchema = z.object({
  pass: z.boolean(),
  reason: z.string(),
});

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 }).withStructuredOutput(
  QualitySchema
);

export const distractorQualityChain = {
  invoke: async ({ question }) => {
    const prompt = `
Evaluate this multiple-choice question's distractors (the wrong options).
Fail it if any distractor is nonsensical, trivially wrong, a duplicate
of another option, or if the question can be answered without reading
the options at all.

Question: ${question.question}
Options: ${question.options.join(" | ")}
Correct option index: ${question.correctOptionIndex}

Respond with pass (true/false) and a short reason.
`;
    return model.invoke(prompt);
  },
};