import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/env.js";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "token not provided",
    });
  }

  try {
    const user = jwt.verify(token, SECURITY_KEY);
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }
    res.status(401).json({
      success: false,
      message: "invalid token",
    });
  }
};

export default verifyToken;
