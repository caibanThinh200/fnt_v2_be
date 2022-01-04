import ProductTypeService from '../Service/ProductType.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import { Request, Response } from "express"

class ProductTypeController {
    public static async AddProductTypeByExcelController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.AddProductTypeByExcelService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.create));
        }
        
    }

    public static async AddProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.AddProductTypeService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.create));
        }
    }

    public static async GetProductTypeCountController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetProductTypeCountService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getCount));
        }
    }

    public static async GetListAllProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetListAllProductTypeService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getList));
        }
    }

    public static async GetListProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetListProductTypeService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getList));
        }
    }

    public static async GetDetailProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetDetailProductTypeService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.getDetail));
        }
    }

    public static async UpdateProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.UpdateProductTypeService(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT_TYPE.update));
        }
    }
}

export default ProductTypeController;