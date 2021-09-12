"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
class CommonFunction {
    constructor() {
        if (!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }
    // functions
    static formatInt(numberParams, defaultNum = 0) {
        return isNaN(numberParams) ? defaultNum : (numberParams);
    }
    static customizeLogger(value, colors) {
        return logger_1.default.info(value[colors]);
    }
}
exports.default = CommonFunction;
