// services/embeddingService.js
import { OpenAIEmbeddings } from "@langchain/openai";
import { qdrant, COLLECTION } from "../config/vectorStore.js";
import { v4 as uuidv4 } from "uuid";

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });

export const embedAndStore = async (chunks, sourceId) => {
  const vectors = await embeddings.embedDocuments(chunks.map((c) => c.text));

  const points = chunks.map((chunk, i) => ({
    id: uuidv4(),
    vector: vectors[i],
    payload: {
      sourceId,
      chunkIndex: chunk.index,
      text: chunk.text,
    },
  }));

  await qdrant.upsert(COLLECTION, { points });
  return points.length;
};