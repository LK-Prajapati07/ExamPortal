// services/ingestionService.js
import { createRequire } from "module";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import mammoth from "mammoth";
import { s3Client } from "../config/s3.js";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const streamToBuffer = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
};

export const extractTextFromS3 = async ({ bucket, key, fileType }) => {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  const response = await s3Client.send(command);
  const buffer = await streamToBuffer(response.Body);

  switch (fileType) {
    case "pdf": {
      const data = await pdfParse(buffer);
      return { text: data.text, totalPages: data.numpages };
    }
    case "docx": {
      const data = await mammoth.extractRawText({ buffer });
      return { text: data.value, totalPages: null };
    }
    case "txt": {
      return { text: buffer.toString("utf-8"), totalPages: null };
    }
    default:
      throw new Error(`Unsupported fileType: ${fileType}`);
  }
};