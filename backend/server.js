import chalk from "chalk";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = 3000;

app.listen(PORT, async () => {
  await connectDB();

  console.log(`
${chalk.green("┌─────────────────────────────────────┐")}
${chalk.green("│")} 🚀 ${chalk.bold("Express Server Running")}           ${chalk.green("│")}
${chalk.green("├─────────────────────────────────────┤")}
${chalk.green("│")} 🌐 URL    : http://localhost:${PORT}${" ".repeat(Math.max(0, 7 - String(PORT).length))}${chalk.green("│")}
${chalk.green("│")} 🗄️  DB     : Connected               ${chalk.green("│")}
${chalk.green("│")} ⏰ Started: ${new Date().toLocaleTimeString()}              ${chalk.green("│")}
${chalk.green("└─────────────────────────────────────┘")}
`);
});
