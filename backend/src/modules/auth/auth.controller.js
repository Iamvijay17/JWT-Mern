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
    res.status(404).json({
      success: false,
      message: "user not found",
    });
  }

  const passwordCheck = await bcrypt.compare(password, user.password);

  if (!passwordCheck) {
    res.status(401).json({
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
  });
};
