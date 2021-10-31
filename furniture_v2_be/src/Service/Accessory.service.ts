import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { AccessoryFactory } from '../Factory/Creator/AccessoryFactory';


class AccessoryService {

    public static async AddAccessoryService(req: any) {
        try {
            const acessoryFactory = AccessoryFactory.createAccessory(req.body, req.headers['type']);
            const acessory = AccessoryFactory.createSchema(acessoryFactory, req.headers['type'])
            const result = await acessory.save()
            .then(() => CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.ACCESSORY.create))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(null, 403, e, TAG_DEFINE.RESULT.ACCESSORY.create);
            });
            return result;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.ACCESSORY.create);
        }
    }

    public static async GetListAccessoryService(req: any) {
        try {
            const type = req.headers['type'];
            const acessory = await AccessoryFactory.getSchema(type).find();
            const acessoryFactory = acessory.map(item => AccessoryFactory.getAccessory(item, type));
            return CommonFunction.getActionResult(acessoryFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.ACCESSORY.getList);
        }
    }

    public static async GetDetailAccessoryService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const acessory = await AccessoryFactory.getSchema(type).findOne({
                _id: id
            });
            const acessoryFactory = AccessoryFactory.getAccessory(acessory, type);
            return CommonFunction.getActionResult(acessoryFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.ACCESSORY.getDetail);
        }
    }

    public static async UpdateAccessoryService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const currentAccessory = await this.GetDetailAccessoryService(req);
            const filters = currentAccessory || {};
            const newRequest = {
                ...currentAccessory,
                ...req.body
            };
            const updateAccessory = AccessoryFactory.createAccessory(newRequest, req.query);
            const updateResult = await AccessoryFactory.getSchema(type)
            .find(filters)
            .updateOne(updateAccessory)
            .then(() => CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.ACCESSORY.update))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(null, 403, err, TAG_DEFINE.RESULT.ACCESSORY.update);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.ACCESSORY.update);
        }
    }
}

export default AccessoryService;