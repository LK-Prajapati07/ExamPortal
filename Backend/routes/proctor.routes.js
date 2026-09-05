// routes/proctor.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { validate, proctorEventSchema } from "../utils/validators.js";
import {
  logProctorEvent,
  getCheatFlag,
  reviewCheatFlag,
} from "../controllers/proctorController.js";

const router = express.Router();

router.post("/events", authMiddleware, roleMiddleware("student"), validate(proctorEventSchema), logProctorEvent);

router.get("/attempts/:attemptId/flag", authMiddleware, roleMiddleware("teacher", "admin"), getCheatFlag);
router.patch(
  "/attempts/:attemptId/flag/review",
  authMiddleware,
  roleMiddleware("teacher", "admin"),
  reviewCheatFlag
);

export default router;