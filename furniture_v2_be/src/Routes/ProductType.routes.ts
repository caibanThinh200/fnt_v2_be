import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductTypeController from '../Controller/ProductType.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, ProductTypeController.AddProductTypeController);
route.get(PATH.APP.start, ProductTypeController.GetListProductTypeController);
route.get(PATH.APP.params.replace("params", "id"), ProductTypeController.GetDetailProductTypeController);
route.put(PATH.APP.params.replace("params", "id"), ProductTypeController.UpdateProductTypeController);

export default route;