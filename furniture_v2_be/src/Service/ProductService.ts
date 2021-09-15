import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductFactory } from '../Factory/factory';
import { createSchema, getSchema } from '../models/Product/index';

class ProductService {

    public static async AddProductService(req: any) {
        try {
            const productFactory = ProductFactory.createProduct(req.body, req.headers['type']);
            const product = createSchema(productFactory, req.headers['type'])
            const result = await product.save()
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.create, 200))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.create, 500);
            });
            return result;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetListProductService(req: any) {
        try {
            const {type} = req.query;
            const product = await getSchema(type).find({type});
            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }
}

export default ProductService;