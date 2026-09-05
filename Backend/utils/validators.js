// utils/validators.js
import { z } from "zod";

export const documentUploadSchema = z.object({
  title: z.string().min(1).max(200),
  fileType: z.enum(["pdf", "docx", "txt"]),
});

export const quizCreateSchema = z.object({
  title: z.string().min(1).max(200),
  sourceId: z.string().min(1),
  topic: z.string().min(1),
  numQuestions: z.number().int().min(1).max(50).default(10),
  duration: z.number().int().min(1).default(30),
  proctored: z.boolean().default(false),
});

export const attemptSubmitSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string().min(1),
      selectedOptionIndex: z.number().int().min(0).max(3),
      timeTakenSeconds: z.number().optional(),
    })
  ),
});

export const proctorEventSchema = z.object({
  attemptId: z.string().min(1),
  type: z.enum([
    "tab-switch",
    "face-not-detected",
    "multiple-faces",
    "copy-paste",
    "fullscreen-exit",
    "window-blur",
    "right-click",
    "devtools-opened",
    "noise-detected",
  ]),
  meta: z.record(z.any()).optional(),
});

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    });
  }
  req.body = result.data;
  next();
};