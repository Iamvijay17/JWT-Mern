import express from "express";
import { login, registerUser } from "./auth.controller.js";

const userRoute = express();

userRoute.post("/register", registerUser);
userRoute.post("/login", login);

export default userRoute;
