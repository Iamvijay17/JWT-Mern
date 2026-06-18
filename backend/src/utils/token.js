import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/env";

const generateToken = (user) => {
  const token = jwt.sign(user, SECURITY_KEY, {
    expiresIn: "7d",
  });
};

export default generateToken;
