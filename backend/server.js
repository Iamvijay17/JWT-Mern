import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = 3000;

app.listen(3000, () => {
  connectDB();
  console.log(`🚀 Server Running On Port ${PORT}`);
});
