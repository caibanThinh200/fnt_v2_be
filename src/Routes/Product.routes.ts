import express, { Router } from "express";
import PATH from "../Constant/url";
import ProductController from "../Controller/Product.controller";
import logger from "../config/logger";
import upload from "../config/multer";
import { validateProduct } from "../Middleware/product.middleware";

const route: Router = express.Router();

route.post(
    PATH.APP.start,
    validateProduct,
    ProductController.AddProductController
);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.PRODUCT.init, ProductController.GetInitProductController);
route.get(PATH.PRODUCT.detail, ProductController.GetDetailProductController);
route.put(
    PATH.PRODUCT.detail,
    validateProduct,
    ProductController.UpdateProductController
);
route.post(PATH.PRODUCT.excel, ProductController.AddProductByExcelController);
route.get(PATH.PRODUCT.filter, ProductController.GetFilterProductController);
route.get(
    PATH.PRODUCT.categoryId,
    ProductController.GetProductsByCategoryIdController
);
route.get(
    PATH.PRODUCT.categoryDetailId,
    ProductController.GetProductsByCategoryDetailIdController
);

export default route;
