import express, {Router} from "express";
import PATH from '../Constant/url';
import BillController from '../Controller/Bill.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, BillController.AddBillController);
route.get(PATH.APP.start, BillController.GetListBillController);
route.get(PATH.BILL.filter, BillController.GetFilterBillController);
route.get(PATH.BILL.nonAuthDetail, BillController.GetDetailNonAuthBillController);
route.get(PATH.BILL.revenue, BillController.GetBillRevenueController);
route.get(PATH.APP.params.replace("params", "id"), BillController.GetDetailBillController);
route.put(PATH.APP.params.replace("params", "id"), BillController.UpdateBillStatusController);

export default route;
