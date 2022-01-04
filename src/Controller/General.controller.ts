import GeneralService from '../Service/General.service';
import CommonFunction from '../Utils/function';
import TAG_DEFINE from '../Constant/define';
import logger from '../Config/logger';
class GeneralController {

    public static async AddMonthRevenueController(req, res) {
        try {
            const result = await GeneralService.AddMonthRevenue(req, res);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.MONTH_REVENUE.create));
        }
    }

    public static async GetMonthRevenueController(req, res) {
        try {
            const result = await GeneralService.GetMonthRevenue(req, res);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.MONTH_REVENUE.getList));
        }
    }
}

export default GeneralController;