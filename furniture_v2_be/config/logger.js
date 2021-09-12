"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importStar(require("winston"));
var moment_1 = __importDefault(require("moment"));
var colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
var typeMessage = function (value) {
    switch (value.level) {
        case "error": return "Error";
        case "warn": return "Warning";
        default: return "Notification";
    }
};
var loggingMessage = function (value) {
    var colorMessage = colors_1.default.black("(" + typeMessage(value) + ") Message logged in " + (0, moment_1.default)(value.timestamp).format("DD-MM-YYYY hh:mm:ss") + " \n- " + value.message + " - ");
    if (value.level === "warn") {
        return colors_1.default.bgYellow(colorMessage);
    }
    if (value.level === "error") {
        return colors_1.default.bgRed(colorMessage);
    }
    else
        return colors_1.default.bgGreen(colorMessage);
};
var logger = (0, winston_1.createLogger)({
    format: winston_1.default.format.combine(winston_1.default.format.printf(function (info) { return loggingMessage(info); })),
    transports: [
        new winston_1.transports.Console()
    ]
});
exports.default = logger;
