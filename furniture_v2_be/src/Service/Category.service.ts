import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { CategoryFactory } from "../Factory/Creator/CategoryFactory";
import lodash from 'lodash'

class CategoryService {
    public static async AddCategoryService(req: any) {
        const type = req.headers["type"];
        try {
            const categoryFactory = CategoryFactory.createCategory(
                req.body,
                type
            );
            const category = CategoryFactory.createSchema(
                categoryFactory,
                type
            );
            const result = await category
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY.create,
                        200
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.CATEGORY.create,
                        500
                    );
                });
            return result;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetListCategoryService(req: any) {
        try {
            const type = req.headers["type"];
            const category = await CategoryFactory.getSchema(type).find({
                type,
            });
            const categoryFactory = category.map((item) =>
                CategoryFactory.getCategory(item, type)
            );
            return categoryFactory;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetDetailCategoryService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const category = await CategoryFactory.getSchema(type).findOne({
                _id: id,
            });
            const categoryFactory = CategoryFactory.getCategory(category, type);
            return categoryFactory;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async UpdateCategoryService(req: any) {
        try {
            const type = req.headers["type"];
            const { body, params: {id} } = req;

            const category = await CategoryFactory.getSchema(type).findOne({_id: id});

            lodash.extend(category, body)

            const result = await category.save()
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.update, 200);
            })
            .catch((e) => {
                logger.error(e)
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.update, 500);
            });
            

            return result;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async DeleteCategoryService(req: any){
        const type = req.headers['type'];
        const {id} = req.params || "";
        try {
            const result = await CategoryFactory.getSchema(type).findByIdAndDelete(id)
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.delete, 200);
            }).catch((e) => {
                logger.error(e)
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.delete, 500);
            });

            return result
        } catch (error) {
            logger.error(error);
        }
    }
}

export default CategoryService;
