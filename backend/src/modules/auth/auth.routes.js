import express from "express";
import { login, refreshToken, registerUser } from "./auth.controller.js";

const userRoutes = express();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", login);
userRoutes.post("/refresh-token", refreshToken);

export default userRoutes;
