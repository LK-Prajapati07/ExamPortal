import  { adminAuth } from "../config/firebase.js";
import Auth from "../model/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token)
    if (!token) {
      return res.status(401).json({
        message: "unauthorized access",
      }); 
      
    }
    const decodeToken = await adminAuth.auth().verifyIdToken(token);
    const { uid, email, name, phoneUrl } = decodeToken;
    const expiresIn = 7 * 24 * 60 * 60 * 1000;
    const isProduction = process.env.NODE_ENV === "production";
    const sessionCookie = await admin
      .auth()
      .createSessionCookie(token, { expiresIn });
    res.cookie("session", sessionCookie, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: expiresIn,
    });
    let user = await Auth.findOne({ uid });
    if (!user) {
      user = await Auth.create({
        uid,
        email,
        name,
        phoneUrl,
      });
    }
    return res.status(200).json({
      message: "User Login SuccessFully",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    const sessionCookie = req.cookies.session;

    if (!sessionCookie) {
      return res.status(401).json({ message: "Unauthorized: No session" });
    }
    const decoded = await admin.auth().verifySessionCookie(sessionCookie, true);

    await admin.auth().revokeRefreshTokens(decoded.uid);

    res.clearCookie("session", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });
    res.json({
      message: "Logout Successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid or expired session", success: false });
  }
};
export const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json({ success: true, data: req.user });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};