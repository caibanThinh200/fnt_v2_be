import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import BillFactory from "../Factory/Creator/BillFactory";
import OrderFactory from "../Factory/Creator/OrderFactory";

class BillService {
    public static async AddBillService(req: any) {
        const {orderId} = req.body;
        const type = req.headers["type"];

        try {
            const order = await OrderFactory.getSchema(type).findById(orderId);

            if (type === TAG_DEFINE.STORE.AA_PET){
                order.haveInBill = true;
                order.save();
            }

            const billFactory = BillFactory.createBill(
                {
                    orderId,
                    products: order.products,
                    total: order.total
                },
                type
            );
            const bill = BillFactory.createSchema(
                billFactory,
                type
            );
            const result = await bill
                .save()
                .then(() =>
                    CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.BILL.create)
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.create);
                });
            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.create);
        }
    }

    public static async GetListBillService(req: any) {
        try {
            const type = req.headers["type"];
            const bill = await BillFactory.getSchema(type)
                .find();
            const billFactory = bill.map((item) =>
                BillFactory.getBill(item, type)
            );
            return CommonFunction.getActionResult(billFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getList);
        }
    }

    public static async GetDetailBillService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const bill = await BillFactory.getSchema(type)
                .findById(id)
            const billFactory = BillFactory.getBill(bill, type);
            return CommonFunction.getActionResult(billFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getDetail);
        }
    }
}

export default BillService;
