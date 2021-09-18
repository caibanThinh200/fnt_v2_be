import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductFactory } from '../Factory/Creator/ProductFactory';
import lodash from 'lodash';

class ProductService {

    public static async AddProductService(req: any) {
        try {
            const type = req.headers["type"];
            const productFactory = ProductFactory.createProduct(req.body, type);
            const product = ProductFactory.createSchema(productFactory, type)
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
            const product = await ProductFactory.getSchema(type).find();
            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const type = req.headers["type"];
            const {id} = req.params || "";
            const product = await ProductFactory.getSchema(type).findById(id)
            const productFactory = ProductFactory.getProduct(product, type);
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateProductService(req: any) {
        try {
            const type = req.headers["type"];
            const {body, params: {id}} = req
            
            const product = await ProductFactory.getSchema(type).findById(id);

            CommonFunction.UpdateTime(product)

            lodash.extend(product, body)

            const result = await product.save()
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.update, 200);
            }).catch(err => {
                logger.error(err);

                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.update,
                    500
                );
            })

            return result;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async DeleteProductService(req: any){
        const type = req.headers["type"];
        const {id} = req.params;

        try {
            const product = await ProductFactory.getSchema(type);

            const result = await product.findByIdAndDelete(id)
            .then(() => {
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.delete,
                    200
                );
            }).catch(err => {
                logger.error(err)
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.delete,
                    500
                );
            })

            return result;
        } catch (error) {
            logger.error(error);
        }
    }
}

export default ProductService;