import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductTypeController from '../Controller/ProductType.controller';
import logger from '../config/logger';
import { ValidateJWT } from '../Middleware/auth.middleware';

const route: Router = express.Router();

route.post(PATH.PRODUCT_TYPE.excel, ValidateJWT, ProductTypeController.AddProductTypeByExcelController);
route.post(PATH.APP.start, ProductTypeController.AddProductTypeController);
route.get(PATH.APP.start, ProductTypeController.GetListProductTypeController);
route.get(PATH.PRODUCT_TYPE.all, ProductTypeController.GetListAllProductTypeController);
route.get(PATH.PRODUCT_TYPE.count, ProductTypeController.GetProductTypeCountController);
route.get(PATH.PRODUCT_TYPE.detail, ProductTypeController.GetDetailProductTypeController);
route.put(PATH.PRODUCT_TYPE.detail, ValidateJWT, ProductTypeController.UpdateProductTypeController);

export default route;