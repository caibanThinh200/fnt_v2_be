import AccessoryService from '../Service/Accessory.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class AccessoryController {
    public static async AddAccessoryController(req: Request, res: Response) {
        try {
            const result = await AccessoryService.AddAccessoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.ACCESSORY.create));
        }
    }

    public static async GetListAccessoryController(req: Request, res: Response) {
        try {
            const result = await AccessoryService.GetListAccessoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.ACCESSORY.getList));
        }
    }

    public static async GetListAllAccessoryController(req: Request, res: Response) {
        try {
            const result = await AccessoryService.GetListAllAccessoryServer(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.ACCESSORY.getList));
        }
    }

    public static async GetDetailAccessoryController(req: Request, res: Response) {
        try {
            const result = await AccessoryService.GetDetailAccessoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.ACCESSORY.getDetail));
        }
    }

    public static async UpdateAccessoryController(req: Request, res: Response) {
        try {
            const result = await AccessoryService.UpdateAccessoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.ACCESSORY.update));
        }
    }
}

export default AccessoryController;