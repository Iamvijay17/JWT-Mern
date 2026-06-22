import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/env.js";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("token====>", token);

  if (!token) {
    res.status(401).json({
      success: false,
      message: "token not provided",
    });
  }

  try {
    const user = jwt.verify(token, SECURITY_KEY);

    console.log("user====>", user);
    req.user = user;

    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "invalid token",
      sys: error.message,
    });
  }
};

export default verifyToken;
