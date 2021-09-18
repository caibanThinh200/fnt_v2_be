"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger"));
const define_1 = __importDefault(require("../Constant/define"));
dotenv_1.default.config();
const MONGO_URI = typeof (process.env.MONGO_URI) !== "string" ? JSON.stringify(process.env.MONGO_URI) : process.env.MONGO_URI;
class MongoProvider {
    constructor() {
        this.MongoConnection();
    }
    static getInstance() {
        if (!MongoProvider.instance) {
            MongoProvider.instance = new MongoProvider();
        }
        return MongoProvider.instance;
    }
    async MongoConnection() {
        await mongoose_1.default.connect(MONGO_URI, (err) => {
            return err ? logger_1.default.error(define_1.default.RESULT.DATABASE.connect.failed, err) : logger_1.default.info(define_1.default.RESULT.DATABASE.connect.success);
        });
    }
}
exports.default = MongoProvider;
