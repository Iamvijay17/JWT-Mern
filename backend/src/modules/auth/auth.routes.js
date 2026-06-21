import express from "express";
import { login, registerUser } from "./auth.controller.js";

const userRoutes = express();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", login);

export default userRoutes;
