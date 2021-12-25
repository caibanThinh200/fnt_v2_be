import express, {Router} from "express";
import PATH from '../Constant/url';
import CategoryController from '../Controller/Category.controller';
import logger from '../Config/logger';
import upload from "../Config/multer";

const route: Router = express.Router();

route.post(PATH.CATEGORY.child, CategoryController.AddChildCateController);
route.post(PATH.APP.start, upload.single("category"),CategoryController.AddCategoryController);
route.get(PATH.APP.start, CategoryController.GetListCategoryController);
route.get(PATH.CATEGORY.detailChild, CategoryController.GetDetailChildController);
route.get(PATH.APP.params.replace("params", "id"), CategoryController.GetDetailCategoryController);
route.put(PATH.APP.params.replace("params", "id"), CategoryController.UpdateCategoryController);
route.delete(PATH.APP.params.replace("params", "id"), CategoryController.DeleteCategoryController);
// route.delete(PATH.CATEGORY.deleteChild, CategoryController.RemoveChildCateController);

export default route;