import BillService from '../Service/Bill.service';
import logger from '../config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class BillController {
    public static async AddBillController(req: Request, res: Response) {
        try {
            const result = await BillService.AddBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.create));
        }
    }

    public static async GetListBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetListBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getList));
        }
    }

    public static async GetFilterBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetFilterBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getList));
        }
    }

    public static async GetDetailBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetDetailBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getDetail));
        }
    }

    public static async GetDetailNonAuthBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetDetailNonAuthBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getDetail));
        }
    }

    public static async UpdateBillStatusController(req: Request, res: Response) {
        try {
            const result = await BillService.UpdateBillStatusService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.update));
        }
    }

    public static async GetBillRevenueController(req: Request, res: Response) {
        try {
            const result = await BillService.GetAllBillRevenue(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.update));
        }
    }
}

export default BillController;
