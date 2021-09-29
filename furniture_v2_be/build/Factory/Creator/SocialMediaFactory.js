"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaFactory = void 0;
const social_media_1 = __importDefault(require("../Concreate/Furniture/Response/social-media"));
const social_media_2 = __importDefault(require("../Concreate/Furniture/Response/social-media"));
const furniture_1 = __importDefault(require("../../models/SocialMedia/furniture"));
// AA-store
const social_media_3 = __importDefault(require("../Concreate/AA-PET/Request/social-media"));
const social_media_4 = __importDefault(require("../Concreate/AA-PET/Response/social-media"));
const aa_pets_1 = __importDefault(require("../../models/SocialMedia/aa-pets"));
const define_1 = __importDefault(require("../../Constant/define"));
class SocialMediaFactory {
    static createSocialMedia(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new social_media_1.default(data);
            case define_1.default.STORE.AA_PET:
                return new social_media_3.default(data);
            default:
                return new social_media_1.default(data);
        }
    }
    static getSocialMedia(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new social_media_2.default(data);
            case define_1.default.STORE.AA_PET:
                return new social_media_4.default(data);
            default:
                return new social_media_2.default(data);
        }
    }
    static createSchema(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new furniture_1.default(data);
            case define_1.default.STORE.AA_PET:
                return new aa_pets_1.default(data);
            default:
                return new furniture_1.default(data);
        }
    }
    static getSchema(type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return furniture_1.default;
            case define_1.default.STORE.AA_PET:
                return aa_pets_1.default;
            default:
                return furniture_1.default;
        }
    }
}
exports.SocialMediaFactory = SocialMediaFactory;
