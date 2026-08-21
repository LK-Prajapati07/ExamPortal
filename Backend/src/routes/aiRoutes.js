import express from "express";
import { createQuestions } from "../controller/aiController.js";
import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();
// add verifyAuth, below function
router.post("/generate-questions", createQuestions);

export default router;