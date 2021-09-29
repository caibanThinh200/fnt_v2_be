"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAPetUserRequest = exports.AAPetProductRequest = void 0;
const product_1 = __importDefault(require("./product"));
const user_1 = __importDefault(require("./user"));
exports.AAPetProductRequest = product_1.default;
exports.AAPetUserRequest = user_1.default;
