// routes/auth.routes.js
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { authLimiter } from "../middlewares/rateLimiter.js";
import { getMe, updateProfile, listUsers, updateUserRole } from "../controllers/authController.js";

const router = express.Router();

router.get("/me", authLimiter, authMiddleware, getMe);
router.patch("/me", authLimiter, authMiddleware, updateProfile);

router.get("/users", authMiddleware, roleMiddleware("admin"), listUsers);
router.patch("/users/:userId/role", authMiddleware, roleMiddleware("admin"), updateUserRole);

export default router;