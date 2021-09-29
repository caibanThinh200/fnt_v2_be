import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { SocialMediaFactory } from '../Factory/Creator/SocialMediaFactory';


class SocialMediaService {

    public static async AddSocialMediaService(req: any) {
        try {
            const socialMediaFactory = SocialMediaFactory.createSocialMedia(req.body, req.headers.type);
            const socialMedia = SocialMediaFactory.createSchema(socialMediaFactory, req.headers.type)
            const result = await socialMedia.save()
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.create, 200))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.create, 500);
            });
            return result;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetListSocialMediaService(req: any) {
        try {
            const type = req.headers.type;
            const socialMedia = await SocialMediaFactory.getSchema(type).find({type});
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory.getSocialMedia(item, type));
            return socialMediaFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetDetailSocialMediaService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const socialMedia = await SocialMediaFactory.getSchema(type).find({
                type,
                _id: id
            });
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory.getSocialMedia(item, type));
            return socialMediaFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateSocialMediaService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const currentSocialMedia = await this.GetDetailSocialMediaService(req);
            const filters = currentSocialMedia[0] || {};
            const newRequest = {
                ...currentSocialMedia[0],
                ...req.body
            };
            const updateSocialMedia = SocialMediaFactory.createSocialMedia(newRequest, req.query);
            const updateResult = await SocialMediaFactory.getSchema(type)
            .find(filters)
            .updateOne(updateSocialMedia)
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.update, 200))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.SOCIAL_MEDIA.update, 500);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
        }
    }
}

export default SocialMediaService;