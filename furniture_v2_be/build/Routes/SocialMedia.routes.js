"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("../Constant/url"));
const SocialMedia_controller_1 = __importDefault(require("../Controller/SocialMedia.controller"));
const route = express_1.default.Router();
route.post(url_1.default.APP.start, SocialMedia_controller_1.default.AddSocialMediaController);
route.get(url_1.default.APP.start, SocialMedia_controller_1.default.GetListSocialMediaController);
route.get(url_1.default.APP.params.replace("params", "id"), SocialMedia_controller_1.default.GetDetailSocialMediaController);
route.put(url_1.default.APP.params.replace("params", "id"), SocialMedia_controller_1.default.UpdateSocialMediaController);
exports.default = route;
