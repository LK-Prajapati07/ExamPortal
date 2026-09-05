// services/retrievalService.js
import { OpenAIEmbeddings } from "@langchain/openai";
import { qdrant, COLLECTION } from "../config/vectorStore.js";

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });

export const retrieveRelevantChunks = async (query, sourceId, topK = 8) => {
  const [queryVector] = await embeddings.embedDocuments([query]);

  const results = await qdrant.search(COLLECTION, {
    vector: queryVector,
    limit: topK,
    filter: {
      must: [{ key: "sourceId", match: { value: sourceId } }],
    },
  });

  return results.map((r) => r.payload.text);
};