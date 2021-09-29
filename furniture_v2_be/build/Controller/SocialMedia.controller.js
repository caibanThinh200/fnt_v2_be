"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocialMedia_service_1 = __importDefault(require("../Service/SocialMedia.service"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
class SocialMediaController {
    static async AddSocialMediaController(req, res) {
        try {
            const result = await SocialMedia_service_1.default.AddSocialMediaService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.create, 500)
                }
            });
        }
    }
    static async GetListSocialMediaController(req, res) {
        try {
            const result = await SocialMedia_service_1.default.GetListSocialMediaService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.getList, 500)
                }
            });
        }
    }
    static async GetDetailSocialMediaController(req, res) {
        try {
            const result = await SocialMedia_service_1.default.GetDetailSocialMediaService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.getDetail, 500)
                }
            });
        }
    }
    static async UpdateSocialMediaController(req, res) {
        try {
            const result = await SocialMedia_service_1.default.UpdateSocialMediaService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.SOCIAL_MEDIA.update, 500)
                }
            });
        }
    }
}
exports.default = SocialMediaController;
