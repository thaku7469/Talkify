import mongoose from "mongoose";
import logger from "./logger.js";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

export const connectToDb = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    logger.info("successfully connected to database");
  } catch (error) {
    logger.error("failed to connect to database", error);
  }
};
