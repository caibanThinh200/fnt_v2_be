import express, { Router } from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../Config/logger';
import upload from "../Config/multer";

const route: Router = express.Router();

const thumbs = upload.fields([
    { name: "mainThumb", maxCount: 1 },
    { name: "subThumb", maxCount: 6 }
])

route.post(PATH.APP.start, thumbs, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.PRODUCT.init, ProductController.GetInitProductController);
route.get(PATH.PRODUCT.detail, ProductController.GetDetailProductController);
route.put(PATH.PRODUCT.detail, thumbs, ProductController.UpdateProductController);
route.post(PATH.PRODUCT.excel, ProductController.AddProductByExcelController);
route.get(PATH.PRODUCT.filter, ProductController.GetFilterProductController);

export default route;