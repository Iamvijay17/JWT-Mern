import bcrypt from "bcryptjs";
import User from "../models/User.js";

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

const login = async (req, res) => {};
