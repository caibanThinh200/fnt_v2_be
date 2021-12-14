import express, {Router} from "express";
import PATH from '../Constant/url';
import AccessoryController from '../Controller/Accessory.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, AccessoryController.AddAccessoryController);
route.get(PATH.APP.start, AccessoryController.GetListAccessoryController);
route.get(PATH.ACCESSORY.all, AccessoryController.GetListAllAccessoryController);
route.get(PATH.APP.params.replace("params", "id"), AccessoryController.GetDetailAccessoryController);
route.put(PATH.APP.params.replace("params", "id"), AccessoryController.UpdateAccessoryController);

export default route;