import lodash from "lodash";
import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import CategoryDetailFactory from "../Factory/Creator/CategoryDetailFactory";

export default class CategoryDetailService {
    public static async AddCategoryDetailService(req: any) {
        const type = req.headers["type"];
        try {
            const categoryDetailFactory =
                CategoryDetailFactory.CreateCategoryDetail(req.body, type);
            const categoryDetail = CategoryDetailFactory.CreateSchema(
                categoryDetailFactory,
                type
            );

            const result = await categoryDetail
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.create,
                        200
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.create,
                        500
                    );
                });
            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetListCategoryDetailService(req: any) {
        const type = req.headers["type"];
        try {
            const list_category_detail = await CategoryDetailFactory.GetSchema(
                type
            )
                .find()
                .populate("category_id");
            const result = list_category_detail.map((item) =>
                CategoryDetailFactory.GetCategoryDetail(item, type)
            );
            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const categoryDetail = await CategoryDetailFactory.GetSchema(type)
                .findById(id)
                .populate("category_id");

            const result = CategoryDetailFactory.GetCategoryDetail(
                categoryDetail,
                type
            );

            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async UpdateCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const categoryDetail = await CategoryDetailFactory.GetSchema(
                type
            ).findById(id);

            lodash.extend(categoryDetail, req.body);

            const result = await categoryDetail
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.update,
                        200
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.update,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async DeleteCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const result = await CategoryDetailFactory.GetSchema(type)
                .findByIdAndDelete(id)
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete,
                        200
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete,
                        500
                    );
                });
            return result;
        } catch (error) {
            logger.error(error);
        }
    }
}
