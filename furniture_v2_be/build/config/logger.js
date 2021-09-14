"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const moment_1 = __importDefault(require("moment"));
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
const typeMessage = (value) => {
    switch (value.level) {
        case "error":
            return "Error";
        case "warn":
            return "Warning";
        default:
            return "Notification";
    }
};
const loggingMessage = (value) => {
    const colorMessage = colors_1.default.black(`(${typeMessage(value)}) Message logged in ${(0, moment_1.default)(value.timestamp).format("DD-MM-YYYY hh:mm:ss")} \n- ${typeof value.message !== "string"
        ? (value.message)
        : value.message} - `);
    if (value.level === `warn`) {
        return colors_1.default.bgYellow(colorMessage);
    }
    if (value.level === "error") {
        return colors_1.default.bgRed(colorMessage);
    }
    else
        return colors_1.default.bgGreen(colorMessage);
};
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.json(), winston_1.format.printf((info) => loggingMessage(info))),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
