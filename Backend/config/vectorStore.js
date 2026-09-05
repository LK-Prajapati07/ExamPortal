// config/vectorStore.js
import { QdrantClient } from "@qdrant/js-client-rest";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

export const qdrant = new QdrantClient({
  url: env.qdrant.url,
  apiKey: env.qdrant.apiKey,
});

export const COLLECTION = "document_chunks";

export const ensureCollection = async () => {
  const collections = await qdrant.getCollections();
  const exists = collections.collections.some((c) => c.name === COLLECTION);

  if (!exists) {
    await qdrant.createCollection(COLLECTION, {
      vectors: { size: 1536, distance: "Cosine" },
    });
    await qdrant.createPayloadIndex(COLLECTION, {
      field_name: "sourceId",
      field_schema: "keyword",
    });
    logger.info(`Qdrant collection "${COLLECTION}" created`);
  } else {
    logger.info(`Qdrant collection "${COLLECTION}" already exists`);
  }
};