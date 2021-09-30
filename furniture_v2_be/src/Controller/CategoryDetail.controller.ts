import CategoryDetailService from "../Service/CategoryDetail.service";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";

class CategoryDetailController {
    public static async AddCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryDetailService.AddCategoryDetailService(req);

            res.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.create,
                        500
                    ),
                },
            });
        }
    }

    public static async GetListCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryDetailService.GetListCategoryDetailService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY_DETAIL.getList, 500)
                }
            });
        }
    }

    public static async GetDetailCategoryDetailController(
        req: Request,
        res: Response
    ) {
        try {
            const result =
                await CategoryDetailService.GetCategoryDetailService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY_DETAIL.getDetail, 500)
                }
            });
        }
    }

    public static async UpdateCategoryDetailController(req: Request, res: Response) {
        try {
            const result =
                await CategoryDetailService.UpdateCategoryDetailService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY_DETAIL.update, 500)
                }
            });
        }
    }

    public static async DeleteCategoryDetailController(req: Request, res: Response) {
        try {
            const result =
                await CategoryDetailService.DeleteCategoryDetailService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete, 500)
                }
            });
        }
    }
}

export default CategoryDetailController;
