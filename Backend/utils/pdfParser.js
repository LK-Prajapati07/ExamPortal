// utils/pdfParser.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export const parsePdfBuffer = async (buffer) => {
  const data = await pdfParse(buffer);
  return {
    text: data.text,
    totalPages: data.numpages,
    info: data.info,
  };
};

export const isTextExtractionSufficient = (text, minLength = 100) => {
  return text && text.trim().length >= minLength;
};