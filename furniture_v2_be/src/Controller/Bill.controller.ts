import BillService from "../Service/BillService";
import {Request, Response} from 'express';
import logger from '../config/logger'
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";

export default class BillController {
    public static async CreateBill(req: Request, res: Response){
        try {
            const result = await BillService.CreateBillService(req);
            
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);

            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.CREATE, 500)
                }
            })
        }
    }

    public static async GetListBill (req: Request, res: Response){
        try {
            const result = await BillService.GetListBillService(req);
            
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);

            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.GET_LIST, 500)
                }
            })
        }
    }
}