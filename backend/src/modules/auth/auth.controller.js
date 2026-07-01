import bcrypt from "bcryptjs";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../../config/env.js";
import { generateRefreshToken, generateToken } from "../../utils/token.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, age, role, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      name,
      email,
      age,
      role,
      password: hashedPassword,
    };

    await User.create(user);
    res.status(201).json({
      success: true,
      message: "user register successfully",
    });
  } catch (err) {}
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user not found",
    });
  }

  const passwordCheck = await bcrypt.compare(password, user.password);

  if (!passwordCheck) {
    return res.status(401).json({
      success: false,
      message: "invalid password",
    });
  }

  const token = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  res.cookie("token", token);
  res.cookie("refreshToken", refreshToken);

  res.json({
    success: true,
    message: "logged in successfully",
    accessToken: token,
  });
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken: token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Refresh token not provided",
      });
    }

    const decoded = jwt.verify(token, SECURITY_KEY);

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newAccessToken = generateToken(user);

    res.json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Refresh token expired",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
};
