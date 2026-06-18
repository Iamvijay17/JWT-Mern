import express from "express";
import { registerUser } from "./auth.controller.js";

const userRoute = express();

userRoute.post("/register", registerUser);
// userRoute.post("/login");

export default userRoute;
