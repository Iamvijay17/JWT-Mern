import express from "express";
import { getProfile } from "./profile.controller.js";
import verifyToken from "../../middlewares/verifyToken.js";
import authorizeRole from "../../middlewares/authorizeRole.js";

const profileRoutes = express();

profileRoutes.get("/", verifyToken, authorizeRole("user"), getProfile);

export default profileRoutes;
