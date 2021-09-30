"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const BaseField_1 = __importDefault(require("./BaseField"));
const function_1 = __importDefault(require("../../Utils/function"));
const define_1 = __importDefault(require("../../Constant/define"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.UserSchema = new mongoose_1.Schema({
    ...BaseField_1.default,
});
exports.UserSchema.pre("save", async function (next) {
    const user = this;
    const salt = await bcrypt_1.default.genSalt(10);
    const hash = await bcrypt_1.default.hash(user.password, salt);
    user.password = hash;
    return next();
});
const User = (0, mongoose_1.model)(function_1.default.getStoreSchema(define_1.default.SCHEMA.USER, define_1.default.STORE.FURNITURE), exports.UserSchema);
exports.default = User;
