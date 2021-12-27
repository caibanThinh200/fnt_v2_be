import { omit } from 'lodash';
import ExcelGenerator from '../Config/excelParser';
import logger from '../Config/logger';
import TAG_DEFINE, { DEFINE_INFOMATION } from '../Constant/define';
import { CategoryFactory } from '../Factory/Creator/CategoryFactory';
import { ProductFactory } from '../Factory/Creator/ProductFactory';
import DecoratorProduct from '../Utils/DecoratorProduct';
import CommonFunction from "../Utils/function";

class ProductService {
    public static async AddProductByExcelService(req: any) {
        try {
            const initProduct = ProductFactory.createProduct(
                null,
                req.headers["type"]
            );
            const dataField = {
                path: DEFINE_INFOMATION.PRODUCT_EXCEL,
                objects: Object.keys(initProduct),
            };
            const listData = new ExcelGenerator(dataField)["data"]["Sheet1"];
            CommonFunction.getInstance().testFunc();
            return Promise.all(
                listData.map(
                    async (item) =>
                        await this.AddProductService({ ...req, body: item })
                )
            );
        } catch (e) {
            logger.error(e);
            return false;
        }
    }

    public static async AddProductService(req: any) {
        try {
            const productFactory = ProductFactory.createProduct(
                { ...req.body, ...req.files },
                req.headers["type"]
                );
            const decoratorProduct = new DecoratorProduct(req.headers["type"], productFactory);
            await decoratorProduct.setAttribute(req.body.attribute);

            const product = ProductFactory.createSchema(
                decoratorProduct.getProduct(),
                req.headers["type"]
            );
            
            const result = await product
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        201,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.create
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        null,
                        403,
                        e,
                        TAG_DEFINE.RESULT.PRODUCT.create
                    );
                });
            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.create
            );
        }
    }

    public static async GetInitProductService(req: any) {
        try {
            const type = req.headers["type"];
            let initProduct: any = await ProductFactory.createProduct(
                null,
                type
            );
            const product = await ProductFactory.getSchema(type).find({});
            const productFactoryNewCode =
                product.map((item) => ProductFactory.getProduct(item, type))
                    .length + 1;
            initProduct = { ...initProduct, code: productFactoryNewCode };
            return CommonFunction.getActionResult(initProduct, 200, null);
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetListProductService(req: any) {
        try {
            const type = req.headers["type"];
            const product = await ProductFactory.getSchema(type).find({});
            
            const productFactory = product.map((item) =>
                ProductFactory.getProduct(item, type)
            );
            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetFilterProductService(req: any) {
        try {
            const type = req.headers["type"];
            const startIndex =
                ((req?.query?.page_index || 1) - 1) *
                (req?.query?.page_size || 10);
            const endIndex =
                (req?.query?.page_index || 1) * (req?.query?.page_size || 10);
            let arr = await ProductFactory.getSchema(type).find(
                omit(req?.query, ["page_size", "page_index", "cate"])
            );
            const rootCategories =
                req.query.cate &&
                (await CategoryFactory.getSchema(type).find());
            if (req.query.cate) {
                (
                    CommonFunction.generateTreeData(rootCategories, []) || []
                ).forEach((item) => {
                    if ((item as any).name === req.query?.cate) {
                        arr = item?.products || [];
                    }
                });
            }
            const filterProduct = arr.map(async (id) => {
                const product = await ProductFactory.getSchema(type).findOne({
                    _id: id,
                });
                return ProductFactory.getProduct(product, type);
            });
            const filterPromise = await Promise.all(filterProduct);
            const listAll = await this.GetListProductService(req);
            const pageCount = CommonFunction.getPageCount(
                listAll.result.length,
                req.query.page_size
            );
            return {
                ...CommonFunction.getActionResult(
                    filterPromise.slice(startIndex, endIndex),
                    200,
                    null
                ),
                total: listAll.result.length,
                page_index: parseInt(req.query.page_index) || 1,
                page_size: parseInt(req.query.page_size) || 10,
                page_count: pageCount,
            };
        } catch (e) {
            logger.error(e);
            return false;
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const product = await ProductFactory.getSchema(type).findById(id);
            
            const productFactory = ProductFactory.getProduct(product, type);
            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.getDetail
            );
        }
    }

    public static async UpdateProductService(req: any) {
        try {
            const type = req.headers["type"];
            const currentProduct = await this.GetDetailProductService(req);
            const newRequest = {
                ...currentProduct?.result,
                ...req.body,
                ...req.files,
            };
            const updateProduct = ProductFactory.createProduct(
                newRequest,
                type
            );
            const updateResult = await ProductFactory.getSchema(type)
                .findByIdAndUpdate(req.params?.id, updateProduct)
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.update
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        403,
                        err,
                        TAG_DEFINE.RESULT.PRODUCT.update
                    );
                });
            return updateResult;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.update
            );
        }
    }

    public static async DeleteProductService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const product = await ProductFactory.getSchema(type);
            const result = await product
                .findByIdAndDelete(id)
                .then(() => {
                    return CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.delete
                    );
                })
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        403,
                        err,
                        TAG_DEFINE.RESULT.PRODUCT.delete
                    );
                });
            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.delete
            );
        }
    }

    public static async GetProductsByCategoryDetailIdService(req: any) {
        const type = req.headers["type"];
        const { category_detail_id } = req.params;

        try {
            const products = await ProductFactory.getSchema(type).find({
                category_detail_id,
            });

            const productFactory = products.map((product) =>
                ProductFactory.getProduct(product, type)
            );

            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (error: any) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }

    public static async GetProductsByCategoryIdService(req: any) {
        const type = req.headers["type"];
        const { categoryId } = req.params;
        try {
            const category = await CategoryFactory.getSchema(type).findById(
                categoryId
            );

            if (category) {
                const ids = category.childCate.map((cate) => cate._id);

                const products = await ProductFactory.getSchema(type).find({
                    category_detail_id: { $in: ids },
                });

                const productFactory = products.map((product) =>
                    ProductFactory.getProduct(product, type)
                );

                return CommonFunction.getActionResult(
                    productFactory,
                    200,
                    null
                );
            }

            return CommonFunction.getActionResult([], 200, null);
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }
}

export default ProductService;