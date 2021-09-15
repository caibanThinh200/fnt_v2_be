import mongoose from "mongoose";
import dotenv from 'dotenv';
import logger from "./logger";
import TAG_DEFINE from '../Constant/define';

dotenv.config()

const MONGO_URI: string = typeof(process.env.MONGO_URI) !== "string" ? JSON.stringify(process.env.MONGO_URI) : process.env.MONGO_URI;

async function MongoConnection(): Promise<void> {
    await mongoose.connect(MONGO_URI, (err: any) => {
        return err ? logger.error(TAG_DEFINE.RESULT.DATABASE.connect.failed, err) : logger.info(TAG_DEFINE.RESULT.DATABASE.connect.success);
    });
}

export default MongoConnection;