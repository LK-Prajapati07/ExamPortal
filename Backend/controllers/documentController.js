// controllers/documentController.js
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { s3Client, S3_BUCKET } from "../config/s3.js";
import { embeddingQueue } from "../jobs/embeddingQueue.js";
import { success, failure } from "../utils/apiResponse.js";

// Note: no Document model — this returns the S3 key as the sourceId
// the client must hold onto to create a quiz later.
export const uploadDocument = async (req, res) => {
  if (!req.file) return failure(res, { statusCode: 400, message: "No file uploaded" });

  const { originalname, mimetype, buffer, size } = req.file;
  const fileType = originalname.split(".").pop().toLowerCase();

  if (!["pdf", "docx", "txt"].includes(fileType)) {
    return failure(res, { statusCode: 400, message: "Unsupported file type" });
  }

  const key = `documents/${req.user._id}/${uuidv4()}-${originalname}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
    })
  );

  const job = await embeddingQueue.add("embed", {
    sourceId: key,
    bucket: S3_BUCKET,
    key,
    fileType,
  });

  return success(res, {
    statusCode: 201,
    message: "Document uploaded, processing started",
    data: { sourceId: key, fileType, size, jobId: job.id },
  });
};

export const getJobStatus = async (req, res) => {
  const { jobId } = req.params;
  const job = await embeddingQueue.getJob(jobId);

  if (!job) return failure(res, { statusCode: 404, message: "Job not found" });

  const state = await job.getState();
  return success(res, {
    message: "Job status fetched",
    data: { jobId, state, returnValue: job.returnvalue || null },
  });
};