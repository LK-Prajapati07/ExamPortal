// services/chunkingService.js
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const chunkText = async (text, { chunkSize = 1000, chunkOverlap = 150 } = {}) => {
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize, chunkOverlap });
  const docs = await splitter.createDocuments([text]);

  return docs.map((doc, index) => ({
    index,
    text: doc.pageContent,
  }));
};