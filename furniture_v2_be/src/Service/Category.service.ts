import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { CategoryFactory } from '../Factory/Creator/CategoryFactory';


class CategoryService {

    public static async AddCategoryService(req: any) {
        try {
            const categoryFactory = CategoryFactory.createCategory(req.body, req.headers['type']);
            const category = CategoryFactory.createSchema(categoryFactory, req.headers['type'])
            const result = await category.save()
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.create, 200))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.create, 500);
            });
            return result;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetListCategoryService(req: any) {
        try {
            const type = req.headers['type'];
            const category = await CategoryFactory.getSchema(type).find({type});
            const categoryFactory = category.map(item => CategoryFactory.getCategory(item, type));
            return categoryFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetDetailCategoryService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const category = await CategoryFactory.getSchema(type).find({
                type,
                _id: id
            });
            const categoryFactory = category.map(item => CategoryFactory.getCategory(item, type));
            return categoryFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateCategoryService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const currentCategory = await this.GetDetailCategoryService(req);
            const filters = currentCategory[0] || {};
            const newRequest = {
                ...currentCategory[0], 
                ...req.body
            };
            const updateCategory = CategoryFactory.createCategory(newRequest, req.query);
            const updateResult = await CategoryFactory.getSchema(type)
            .find(filters)
            .updateOne(updateCategory)
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.update, 200))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.CATEGORY.update, 500);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
        }
    }
}

export default CategoryService;