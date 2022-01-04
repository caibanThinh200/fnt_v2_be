import express, {Router} from "express";
import PATH from '../Constant/url';
import AccessoryController from '../Controller/Accessory.controller';
import logger from '../config/logger';
import { ValidateJWT } from '../Middleware/auth.middleware';

const route: Router = express.Router();

route.post(PATH.APP.start, ValidateJWT, AccessoryController.AddAccessoryController);
route.get(PATH.APP.start, AccessoryController.GetListAccessoryController);
route.get(PATH.ACCESSORY.all, AccessoryController.GetListAllAccessoryController);
route.get(PATH.APP.params.replace("params", "id"), AccessoryController.GetDetailAccessoryController);
route.put(PATH.APP.params.replace("params", "id"), ValidateJWT, AccessoryController.UpdateAccessoryController);

export default route;