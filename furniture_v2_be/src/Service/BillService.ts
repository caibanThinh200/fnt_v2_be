import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import BillFactory from '../Factory/Creator/BillFactory';
import logger from "../config/logger";
import lodash from "lodash";

export default class BillService{
    public static async CreateBillService(req: any){
        const type = req.headers['type'];
        const {body} = req;
        try {
            const billFactory = BillFactory.createBill(body, type);

            const billSchema = BillFactory.createSchema(billFactory, type);
            const result = await billSchema.save()
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.CREATE, 200);
            })
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.CREATE, 500);
            });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.CREATE, 500)
        }
    }
    
    public static async GetListBillService(req: any){
        const type = req.headers['type'];
        
        try {
            const bill = await BillFactory.getSchema(type).find();

            const billFactory = bill.map(item => BillFactory.getBill(item, type));

            return billFactory;

        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.CREATE, 500)
        }
    }

    public static async GetDetailBillService(req: any){
        const type = req.headers['type'];
        const {id} = req.params;

        try {
            const bill = await BillFactory.getSchema(type).findById(id);

            const billFactory = BillFactory.getBill(bill, type);

            return billFactory;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.BILL.GET_DETAIL,
                500
            );
        }
    }

    public static async UpdateBillService(req: any){
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const bill = await BillFactory.getSchema(type).findById(id);

            CommonFunction.UpdateTime(bill)

            lodash.extend(bill, req.body);

            const result = await bill.save()
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.UPDATE, 200);
            })
            .catch(err => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.UPDATE, 500);
            })

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.BILL.UPDATE,
                500
            );
        }
    }

    public static async DeleteBillService(req: any){
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const result = await BillFactory.getSchema(type).findByIdAndDelete(id)
            .then(() => {
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.DELETE, 200);
            })
            .catch(err => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.BILL.DELETE, 500);
            });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.BILL.DELETE,
                500
            );
        }
    }
}