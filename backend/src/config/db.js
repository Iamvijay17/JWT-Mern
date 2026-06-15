import mongoose from "mongoose";
import chalk from "chalk";
import { DB_URI } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);

    console.log(chalk.green.bold("\n🥭 MongoDB Connected Successfully"));
    console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
    console.log(chalk.cyan(`📡 Host : ${conn.connection.host}`));
    console.log(chalk.yellow(`🗄️  DB   : ${conn.connection.name}`));
    console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));
  } catch (err) {
    console.error(chalk.red.bold("\n❌ MongoDB Connection Failed"));
    console.error(chalk.red(err.message));
    process.exit(1);
  }
};

export default connectDB;
