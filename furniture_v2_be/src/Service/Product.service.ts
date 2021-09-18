import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductFactory } from '../Factory/Creator/ProductFactory';


class ProductService {

    public static async AddProductService(req: any) {
        try {
            const productFactory = ProductFactory.createProduct(req.body, req.headers['type']);
            const product = ProductFactory.createSchema(productFactory, req.headers['type'])
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
            const type = req.headers['type'];
            const product = await ProductFactory.getSchema(type).find({type});
            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const product = await ProductFactory.getSchema(type).find({
                type,
                _id: id
            });
            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateProductService(req: any) {
        try {
            const {type} = req.query || "";
            const currentProduct = await this.GetDetailProductService(req);
            const filters = currentProduct[0] || {};
            const newRequest = {
                ...currentProduct[0], 
                ...req.body
            };
            const updateProduct = ProductFactory.createProduct(newRequest, req.query);
            const updateResult = await ProductFactory.getSchema(type)
            .find(filters)
            .updateOne(updateProduct)
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.update, 200))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.update, 500);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
        }
    }

}

export default ProductService;