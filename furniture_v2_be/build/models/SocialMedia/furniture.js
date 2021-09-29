"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaSchema = void 0;
const baseField_1 = __importDefault(require("./baseField"));
const mongoose_1 = require("mongoose");
const function_1 = __importDefault(require("../../Utils/function"));
const define_1 = __importDefault(require("../../Constant/define"));
const FurnitureFields = {
    ...baseField_1.default,
};
exports.SocialMediaSchema = new mongoose_1.Schema(FurnitureFields);
const FurnitureSocailMediaModel = (0, mongoose_1.model)(function_1.default.getStoreSchema(define_1.default.SCHEMA.SOCIAL_MEDIA, define_1.default.STORE.FURNITURE), exports.SocialMediaSchema);
exports.default = FurnitureSocailMediaModel;
