import BillService from '../Service/Bill.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class BillController {
    public static async AddBillController(req: Request, res: Response) {
        try {
            const result = await BillService.AddBillService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.create, 500)
                }
            });
        }
    }

    public static async GetListBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetListBillService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.getList, 500)
                }
            });
        }
    }

    public static async GetDetailBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetDetailBillService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.getDetail, 500)
                }
            });
        }
    }
}

export default BillController;
