import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductTypeFactory } from '../Factory/Creator/ProductTypeFactory';
import { Document, Schema } from 'mongoose';

class ProductTypeService {

    public static async AddProductTypeService(req: any) {
        try {
            const productTypeFactory = ProductTypeFactory.createProductType(req.body, req.headers['type']);
            const productType = ProductTypeFactory.createSchema(productTypeFactory, req.headers['type']);
            const result = await productType.save()
            .then(() => CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.PRODUCT_TYPE.create))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(null, 403, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.create);
            });
            return result;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.create);
        }
    }

    public static async GetListProductTypeService(req: any) {
        try {
            const type = req.headers['type'];
            const productType = await ProductTypeFactory.getSchema(type).find().populate("attribute");
            const productTypeFactory = productType.map(item => ProductTypeFactory.getProductType(item, type));
            return CommonFunction.getActionResult(productTypeFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getList);
        }
    }

    public static async GetDetailProductTypeService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const productType = await ProductTypeFactory.getSchema(type).findOne({
                _id: id
            });
            const productTypeFactory = ProductTypeFactory.getProductType(productType, type);
            return CommonFunction.getActionResult(productTypeFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getDetail);
        }
    }

    public static async UpdateProductTypeService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const currentProductType = await this.GetDetailProductTypeService(req);
            const filters = currentProductType || {};
            const newRequest = {
                ...currentProductType,
                ...req.body
            };
            const updateProductType = ProductTypeFactory.createProductType(newRequest, req.query);
            const updateResult = await ProductTypeFactory.getSchema(type)
            .find(filters)
            .updateOne(updateProductType)
            .then(() => CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.PRODUCT_TYPE.update))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(null, 403, err, TAG_DEFINE.RESULT.PRODUCT_TYPE.update);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.update);
        }
    }
}

export default ProductTypeService;