// utils/apiResponse.js
export const success = (res, { statusCode = 200, message = "Success", data = null } = {}) => {
  return res.status(statusCode).json({ success: true, message, data });
};

export const failure = (res, { statusCode = 400, message = "Something went wrong", errors = null } = {}) => {
  return res.status(statusCode).json({ success: false, message, errors });
};

export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}