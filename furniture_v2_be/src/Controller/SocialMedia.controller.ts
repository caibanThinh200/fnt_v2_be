import SocialMediaService from '../Service/SocialMedia.service';
import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class SocialMediaController {
    public static async AddSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.AddSocialMediaService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.create, 500)
                }
            });
        }
    }

    public static async GetListSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.GetListSocialMediaService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.getList, 500)
                }
            });
        }
    }

    public static async GetDetailSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.GetDetailSocialMediaService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.getDetail, 500)
                }
            });
        }
    }
    
    public static async UpdateSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.UpdateSocialMediaService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.update, 500)
                }
            });
        }
    }
}

export default SocialMediaController;