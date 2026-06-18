import express from "express";
import userRoute from "./modules/auth/auth.routes.js";

const app = express();
app.use(express.json());

app.use("/auth", userRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

export default app;
