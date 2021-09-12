"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../config/logger"));
var CommonFunction = /** @class */ (function () {
    function CommonFunction() {
        if (!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }
    // functions
    CommonFunction.formatInt = function (numberParams, defaultNum) {
        if (defaultNum === void 0) { defaultNum = 0; }
        return isNaN(numberParams) ? defaultNum : (numberParams);
    };
    CommonFunction.customizeLogger = function (value, colors) {
        return logger_1.default.info(value[colors]);
    };
    return CommonFunction;
}());
exports.default = CommonFunction;
