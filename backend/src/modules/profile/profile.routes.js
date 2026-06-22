import express from "express";
import { getProfile } from "./profile.controller.js";
import verifyToken from "../../middlewares/verifyToken.js";

const profileRoutes = express();

profileRoutes.get("/",verifyToken, getProfile);

export default profileRoutes;
