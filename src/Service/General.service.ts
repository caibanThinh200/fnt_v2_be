import logger from "../Config/logger";
import MonthRevenueFactory from "../Factory/Creator/MonthRevenueFactory";
import CommonFunction from '../Utils/function';
import TAG_DEFINE from '../Constant/define';

class GeneralService {
    public static async AddMonthRevenue(req, res) {
        try {
            const type = req.headers["type"];
            const monthRevenueFactory = MonthRevenueFactory.createMonthRevenue(req.body, type);
            const monthRevenue = MonthRevenueFactory.createSchema(
                monthRevenueFactory,
                req.headers["type"]
            );
            const result = await monthRevenue.save()
                .then(() => {
                    return CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.MONTH_REVENUE.create)
                })
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.MONTH_REVENUE.create);
                });
            return result;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.MONTH_REVENUE.create);
        }
    }

    public static async GetMonthRevenue(req, res) {
        try {
            const type = req.headers["type"];
            const monthRevenue = await MonthRevenueFactory.getSchema(type)
                .find().then(revenue => {
                    const result = revenue.filter(item => {
                        const currentMonth = new Date().getMonth();
                        const revenueMonth = new Date((item as any).created_at).getMonth();
                        return currentMonth === revenueMonth && item
                    });
                    return result;
                });
            const monthRevenueFactory = monthRevenue.map((item) =>
                MonthRevenueFactory.getMonthRevenue(item, type)
            );
            return CommonFunction.getActionResult(monthRevenueFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.MONTH_REVENUE.getList);
        }
    }

    
}

export default GeneralService;