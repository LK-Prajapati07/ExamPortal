import express from "express";
import { startExam, submitExam } from "../controller/examController.js";

const router = express.Router();

router.get("/start", startExam);

router.post("/submit", submitExam);

export default router;