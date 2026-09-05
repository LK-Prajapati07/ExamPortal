// models/Document.js
import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    originalFileName: { type: String, required: true },
    fileType: { type: String, enum: ["pdf", "docx", "txt"], required: true },
    s3Key: { type: String, required: true },
    s3Bucket: { type: String, required: true },
    fileUrl: { type: String, default: null },
    fileSize: { type: Number, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    status: {
      type: String,
      enum: ["uploaded", "parsing", "chunking", "embedding", "ready", "failed"],
      default: "uploaded",
    },
    errorMessage: { type: String, default: null },
    totalChunks: { type: Number, default: 0 },
    totalPages: { type: Number, default: null },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);