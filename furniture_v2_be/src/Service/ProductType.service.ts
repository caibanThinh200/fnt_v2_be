import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductTypeFactory } from '../Factory/Creator/ProductTypeFactory';
import { Document, Schema } from 'mongoose';
import { omit } from 'lodash';
import { DEFINE_INFOMATION } from '../Constant/define';
import ExcelGenerator from '../Config/excelParser';

class ProductTypeService {

    public static async AddProductTypeByExcelService(req: any) {
        try {
            const initProduct = ProductTypeFactory.createProductType(null, req.headers['type']);
            const dataField = {
                path: DEFINE_INFOMATION.PRODUCT_EXCEL,
                objects: Object.keys(initProduct)
            }
            const listData = new ExcelGenerator(dataField)["data"]["Sheet1"];
            return Promise.all(listData.map(async item => await this.AddProductTypeService({...req, body: item})))
        } catch(e) {
            logger.error(e);
            return false;
        }
    }

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

    public static async GetProductTypeCountService(req: any) {
        try {
            const type = req.headers['type'];
            const initProductType = ProductTypeFactory.createProductType(null, type);
            const totalCount = (await ProductTypeFactory.getSchema(type).find());
            return CommonFunction.getActionResult({...initProductType, type: totalCount.length + 1}, 200, null)
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getCount);
        }
    }

    public static async GetListAllProductTypeService(req: any) {
        try {
            const type = req.headers['type'];
            const productType = await ProductTypeFactory.getSchema(type).find().populate("attribute");
            const productTypeFactory = await productType.map(item => ProductTypeFactory.getProductType(item, type));
            const pagination = {
                total: productTypeFactory.length,
                page_index: 1,
                page_size: 10,
                page_count: CommonFunction.getPageCount(productTypeFactory.length, 10)
            }
            return {
                ...CommonFunction.getActionResult(productTypeFactory, 200, null),
                ...pagination
            }
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getList);
        }
    }

    public static async GetListProductTypeService(req: any) {
        try {
            const type = req.headers['type'];
            const filterParams = omit(req.query, ["page_index", "page_size"])
            const pageIndex = parseInt(req.query?.page_index) || 1;
            const pageSize = parseInt(req.query?.page_size) || 10;
            const startIndex = ((pageIndex || 1) - 1) * (pageSize || 10);
            const endIndex = ((pageIndex || 1)) * (pageSize || 10);
            // const productTypeCount = (await ProductTypeFactory.getSchema(type).find()).length;
            const productType = await ProductTypeFactory.getSchema(type).find(filterParams).populate("attribute")
            const productTypeFactory = productType.map(item => ProductTypeFactory.getProductType(item, type)).slice(startIndex, endIndex);
            const pagination = {
                total: productType.length,
                page_index: pageIndex,
                page_size: pageSize,
                page_count: CommonFunction.getPageCount(productType.length, pageSize)
            }
            return {
                ...CommonFunction.getActionResult(productTypeFactory, 200, null),
                ...pagination
            };
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
            }).populate("attribute");
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