import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);


export default route;