import CategoryService from '../Service/Category.service';
import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class CategoryController {
    public static async AddCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.AddCategoryService(req);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.create, 500)
                }
            });
        }
    }

    public static async GetListCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetListCategoryService(req);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.getList, 500)
                }
            });
        }
    }

    public static async GetDetailCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetDetailCategoryService(req);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.getDetail, 500)
                }
            });
        }
    }

    public static async UpdateCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.UpdateCategoryService(req);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.update, 500)
                }
            });
        }
    }

    public static async DeleteCategoryController(req: Request, res: Response){
        try {
            const result = await CategoryService.DeleteCategoryService(req);
            console.log(result);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.delete, 500)
                }
            });
        }
    }
}

export default CategoryController;