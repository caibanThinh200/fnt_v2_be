"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSchema = void 0;
const mongoose_1 = require("mongoose");
const define_1 = __importDefault(require("../../Constant/define"));
const baseField_1 = __importDefault(require("./baseField"));
const FurnitureImageField = {
    ...baseField_1.default
};
exports.ImageSchema = new mongoose_1.Schema(FurnitureImageField);
const ImageModel = (0, mongoose_1.model)(define_1.default.SCHEMA.IMAGE, exports.ImageSchema);
exports.default = ImageModel;
