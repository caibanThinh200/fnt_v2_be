import express, {Router} from "express";
import PATH from '../Constant/url';
import GeneralController from '../Controller/General.controller';

const route: Router = express.Router();

route.post(PATH.APP.start, GeneralController.AddMonthRevenueController);
route.get(PATH.APP.start, GeneralController.GetMonthRevenueController);

export default route;
