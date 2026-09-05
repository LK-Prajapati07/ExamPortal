// utils/tokenCounter.js
import { encoding_for_model } from "tiktoken";

const enc = encoding_for_model("gpt-4o-mini");

export const countTokens = (text) => {
  const tokens = enc.encode(text);
  return tokens.length;
};

export const estimateChunkBudget = (contextWindow, reservedForOutput = 1500) => {
  return contextWindow - reservedForOutput;
};

export const truncateToTokenLimit = (text, maxTokens) => {
  const tokens = enc.encode(text);
  if (tokens.length <= maxTokens) return text;
  const truncated = tokens.slice(0, maxTokens);
  return new TextDecoder().decode(enc.decode(truncated));
};