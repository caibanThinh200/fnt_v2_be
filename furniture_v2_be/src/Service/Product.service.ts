import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductFactory } from '../Factory/Creator/ProductFactory';
import lodash from 'lodash';
import { Request } from 'express';
import ExcelGenerator from '../Config/excelParser';
import FurnitureModel from '../models/Product/furniture';
import { DEFINE_INFOMATION } from '../Constant/define';
import { CategoryFactory } from '../Factory/Creator/CategoryFactory';
import { Model, Schema } from 'mongoose';

class ProductService {

    public static async AddProductByExcelService(req: any) {
        try {
            const initProduct = ProductFactory.createProduct(null, req.headers['type']);
            const dataField = {
                path: DEFINE_INFOMATION.PRODUCT_EXCEL,
                objects: Object.keys(initProduct)
            }
            const listData = new ExcelGenerator(dataField)["data"]["Sheet1"];
            return Promise.all(listData.map(async item => await this.AddProductService({...req, body: item})))
        } catch(e) {
            console.log(e);
            return false;
        }
    }

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
            const product = await ProductFactory.getSchema(type).find({});
            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetFilterProductService(req: any) {
        try {
            const type = req.headers['type'];
            const startIndex = ((req?.query?.page_index || 1) - 1) * (req?.query?.page_size || 10)
            const endIndex = ((req?.query?.page_index || 1)) * (req?.query?.page_size || 10)
            let arr = await this.GetListProductService(req);
            const rootCategories = req.query.cate && await CategoryFactory.getSchema(type).find();
            if(req.query.cate) {
                (CommonFunction.generateTreeData(rootCategories, []) || []).forEach(item => {
                    if((item as any).name === req.query?.cate) {
                        arr = (item?.products || []); 
                    }
                })
            }
            const filterProduct = arr.map(async id => {
                const product = await ProductFactory.getSchema(type).findOne({_id: id});
                return ProductFactory.getProduct(product, type);
            });
            const filterPromise = await Promise.all(filterProduct);
            return filterPromise.slice(startIndex, endIndex);
        } catch(e) {
            logger.error(e);
            return false;
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

                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.update,
                    500
                );
            })
            return updateResult;
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