// controllers/authController.js
import User from "../models/User.js";
import { success, failure } from "../utils/apiResponse.js";

export const getMe = async (req, res) => {
  return success(res, { message: "Current user", data: req.user });
};

export const updateProfile = async (req, res) => {
  const { name, avatarUrl } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { ...(name && { name }), ...(avatarUrl && { avatarUrl }) } },
    { new: true }
  );

  return success(res, { message: "Profile updated", data: user });
};

export const listUsers = async (req, res) => {
  // admin only — gated at route level via roleMiddleware
  const users = await User.find().select("-__v");
  return success(res, { message: "Users fetched", data: users });
};

export const updateUserRole = async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  if (!["student", "teacher", "admin"].includes(role)) {
    return failure(res, { statusCode: 400, message: "Invalid role" });
  }

  const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
  if (!user) return failure(res, { statusCode: 404, message: "User not found" });

  return success(res, { message: "Role updated", data: user });
};