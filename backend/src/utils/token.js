import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/env.js";

export const generateToken = (user) => {
  const { email, name, role } = user;
  return jwt.sign({ email: email, name: name, role: role }, SECURITY_KEY, {
    expiresIn: "5m",
  });
};

export const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, SECURITY_KEY, {
    expiresIn: "7d",
  });
};
