"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const SocialMediaFactory_1 = require("../Factory/Creator/SocialMediaFactory");
class SocialMediaService {
    static async AddSocialMediaService(req) {
        try {
            const socialMediaFactory = SocialMediaFactory_1.SocialMediaFactory.createSocialMedia(req.body, req.headers.type);
            const socialMedia = SocialMediaFactory_1.SocialMediaFactory.createSchema(socialMediaFactory, req.headers.type);
            const result = await socialMedia.save()
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.create, 200))
                .catch(e => {
                logger_1.default.error(e);
                return function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.create, 500);
            });
            return result;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetListSocialMediaService(req) {
        try {
            const type = req.headers.type;
            const socialMedia = await SocialMediaFactory_1.SocialMediaFactory.getSchema(type).find({ type });
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory_1.SocialMediaFactory.getSocialMedia(item, type));
            return socialMediaFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetDetailSocialMediaService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const socialMedia = await SocialMediaFactory_1.SocialMediaFactory.getSchema(type).find({
                type,
                _id: id
            });
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory_1.SocialMediaFactory.getSocialMedia(item, type));
            return socialMediaFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async UpdateSocialMediaService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const currentSocialMedia = await this.GetDetailSocialMediaService(req);
            const filters = currentSocialMedia[0] || {};
            const newRequest = {
                ...currentSocialMedia[0],
                ...req.body
            };
            const updateSocialMedia = SocialMediaFactory_1.SocialMediaFactory.createSocialMedia(newRequest, req.query);
            const updateResult = await SocialMediaFactory_1.SocialMediaFactory.getSchema(type)
                .find(filters)
                .updateOne(updateSocialMedia)
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.update, 200))
                .catch((err) => {
                logger_1.default.error(err);
                return function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.update, 500);
            });
            return updateResult;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = SocialMediaService;
