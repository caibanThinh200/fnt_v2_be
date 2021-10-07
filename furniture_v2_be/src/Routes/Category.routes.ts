import express, {Router} from "express";
import PATH from '../Constant/url';
import CategoryController from '../Controller/Category.controller';
import logger from '../Config/logger';
import upload from "../Config/multer";

const route: Router = express.Router();

route.post(PATH.APP.start, upload.single("category"),CategoryController.AddCategoryController);
route.get(PATH.APP.start, CategoryController.GetListCategoryController);
route.get(PATH.APP.params.replace("params", "id"), CategoryController.GetDetailCategoryController);
route.put(PATH.APP.params.replace("params", "id"), CategoryController.UpdateCategoryController);
route.delete(PATH.APP.params.replace("params", "id"), CategoryController.DeleteCategoryController);

export default route;