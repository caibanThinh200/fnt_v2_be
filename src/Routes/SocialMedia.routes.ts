import express, {Router} from "express";
import PATH from '../Constant/url';
import SocialMediaController from '../Controller/SocialMedia.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, SocialMediaController.AddSocialMediaController);
route.get(PATH.APP.start, SocialMediaController.GetListSocialMediaController);
route.get(PATH.APP.params.replace("params", "id"), SocialMediaController.GetDetailSocialMediaController);
route.put(PATH.APP.params.replace("params", "id"), SocialMediaController.UpdateSocialMediaController);

export default route;