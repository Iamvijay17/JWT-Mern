import express from "express";
import morgen from "morgan";
import userRoutes from "./modules/auth/auth.routes.js";
import profileRoutes from "./modules/profile/profile.routes.js";

const app = express();
app.use(morgen("dev"));
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/profile", profileRoutes)

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

export default app;
