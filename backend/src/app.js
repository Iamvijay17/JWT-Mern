import express from "express";
import morgen from "morgan";
import userRoute from "./modules/auth/auth.routes.js";

const app = express();
app.use(morgen("dev"));
app.use(express.json());

app.use("/api/auth", userRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

export default app;
