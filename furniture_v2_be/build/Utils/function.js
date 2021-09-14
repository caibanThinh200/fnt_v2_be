"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
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
    static capitalizeFirstLetter(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    static getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value);
    }
    static getActionResult(value, status) {
        return value + define_1.default.RESULT[status === 200 ? 200 : 500];
    }
    static generateJSONObj(value) {
        return JSON.parse(JSON.stringify(value));
    }
}
exports.default = CommonFunction;
