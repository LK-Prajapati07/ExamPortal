// config/llm.js
import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { env } from "./env.js";

export const chatModel = new ChatOpenAI({
  apiKey: env.openaiApiKey,
  model: "gpt-4o-mini",
  temperature: 0.4,
});

export const embeddingModel = new OpenAIEmbeddings({
  apiKey: env.openaiApiKey,
  model: "text-embedding-3-small",
});