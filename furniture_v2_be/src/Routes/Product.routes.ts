import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../Config/logger';
import upload from "../Config/multer";

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.PRODUCT.init, ProductController.GetInitProductController);
route.get(PATH.PRODUCT.detail, ProductController.GetDetailProductController);
route.put(PATH.PRODUCT.detail,upload.array("product", 10) ,ProductController.UpdateProductController);
route.post(PATH.PRODUCT.excel, ProductController.AddProductByExcelController);
route.get(PATH.PRODUCT.filter, ProductController.GetFilterProductController);
route.delete(PATH.APP.params.replace('params', 'id'), ProductController.DeleteProductController);
route.put(PATH.APP.params.replace("params", "id"), ProductController.UpdateProductController);

export default route;