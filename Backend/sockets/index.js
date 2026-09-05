// sockets/index.js
import { Server } from "socket.io";
import admin from "../config/firebase.js";
import User from "../models/User.js";
import { registerProctorSocket } from "./proctorSocket.js";
import { registerExamSocket } from "./examSocket.js";
import { logger } from "../utils/logger.js";

export const initSockets = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL || "*", credentials: true },
  });

  // Auth handshake — same Firebase token verification as REST, done once per connection
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error("No token provided"));

      const decoded = await admin.auth().verifyIdToken(token);
      const user = await User.findOne({ firebaseUid: decoded.uid });
      if (!user) return next(new Error("User not found"));

      socket.user = user;
      next();
    } catch (err) {
      next(new Error("Authentication failed"));
    }
  });

  io.on("connection", (socket) => {
    logger.info(`Socket connected: ${socket.id} (user=${socket.user._id})`);

    registerProctorSocket(io, socket);
    registerExamSocket(io, socket);

    socket.on("disconnect", () => {
      logger.info(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};