import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import BillFactory from '../Factory/Creator/BillFactory';
import logger from "../config/logger";

export default class BillService{
    public static async CreateBillService(req: any){
        const type = req.headers['type'];
        const {body} = req;
        try {
            const billFactory = BillFactory.createBill(body, type);

            const billSchema = BillFactory.createSchema(billFactory, type);
            console.log(billFactory)
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
}