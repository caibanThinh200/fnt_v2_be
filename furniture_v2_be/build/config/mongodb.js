"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const MONGO_URI = typeof (process.env.MONGO_URI) !== "string" ? JSON.stringify(process.env.MONGO_URI) : process.env.MONGO_URI;
async function MongoConnection() {
    await mongoose_1.default.connect(MONGO_URI, (err) => {
        return err ? logger_1.default.error("DB failed ", err) : logger_1.default.info("DB connected");
    });
}
exports.default = MongoConnection;
