import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import BillFactory from "../Factory/Creator/BillFactory";
import { omit } from 'lodash';
import { SocketService } from "../Socket";
import moment from "moment";

class BillService {
    public static async AddBillService(req: any) {
        try {
            const billFactory = BillFactory.createBill(req.body, req.headers["type"]);
            const bill = BillFactory.createSchema(billFactory, req.headers["type"]);
            const result = await bill.save()
                .then(() => {
                    return CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.BILL.create)
                })
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
                .find()
                .populate("user_id")
                .populate({
                    path: "products",
                    populate: {
                        path: "product_id"
                    }
                });
            const billFactory = bill.map((item) =>
                BillFactory.getBill(item, type)
            );
            return CommonFunction.getActionResult(billFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getList);
        }
    }

    public static async GetFilterBillService(req: any) {
        try {
            const type = req.headers['type'];
            const filterParams = omit(req.query, ["page_index", "page_size"])
            const pageIndex = parseInt(req.query?.page_index) || 1;
            const pageSize = parseInt(req.query?.page_size) || 10;
            const startIndex = ((pageIndex || 1) - 1) * (pageSize || 10);
            const endIndex = ((pageIndex || 1)) * (pageSize || 10);
            // const BillCount = (await BillFactory.getSchema(type).find()).length;
            const Bill = await BillFactory.getSchema(type).find(filterParams).populate("products.product");
            const BillFactoryModel = Bill.map(item => BillFactory.getBill(item, type)).slice(startIndex, endIndex);
            // console.log((BillFactoryModel as any).products);
            const pagination = {
                total: Bill.length,
                page_index: pageIndex,
                page_size: pageSize,
                page_count: CommonFunction.getPageCount(Bill.length, pageSize)
            }
            const currentMonth = new Date().getMonth();
            const monthRevenue = Bill.reduce((i, k) => {
                const orderMonth = new Date(k.updated_at).getMonth();
                if (currentMonth === orderMonth) {
                    return k.status === 2 && (i + k.total)
                }

            }, 0);
            return {
                ...CommonFunction.getActionResult(BillFactoryModel, 200, null),
                ...pagination,
                revenue: monthRevenue,
                month: currentMonth + 1,
                // orders: Bill.length
            };
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetDetailBillService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const bill = await BillFactory.getSchema(type)
                .findById(id)
                .populate("user_id");
            const billFactory = BillFactory.getBill(bill, type);
            return CommonFunction.getActionResult(billFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getDetail);
        }
    }

    public static async GetDetailNonAuthBillService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const bill = await BillFactory.getSchema(type).findById(id).populate("products.product");
            const billFactory = BillFactory.getBill(bill, type);
            return CommonFunction.getActionResult(billFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getDetail);
        }
    }

    public static async UpdateBillStatusService(req: any) {
        try {
            const type = req.headers["type"];
            const reqFactory = BillFactory.createBill(req.body, type);
            const currentBill = await (BillService.GetDetailNonAuthBillService(req) as any)?.result;
            const newBill = {
                ...currentBill,
                status: (reqFactory as any)?.status
            }
            const result = await BillFactory.getSchema(type)
                .findById(req.params.id)
                .updateOne(newBill)
                .then(() => {
                    return CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.BILL.update);
                });
            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.update);
        }
    }

    public static async GetAllBillRevenue(req: any) {
        try {
            const type = req.headers["type"];
            let phoneCheck = "",
            totalPhone = [],
            approveOrder = 0,
            cancelOrder = 0;
            const Bill = await BillFactory.getSchema(type).find().populate("products.product");
            const totalRevenue = Bill.reduce((i, k) => k.status === 2 && i + k.total, 0)
            Bill.map(item => {
                const billModel: any = omit(BillFactory.getBill(item, type), ["password", "gender"]);
                if(billModel.user?.phone && billModel.user?.phone !== phoneCheck) {
                    totalPhone.push(billModel.user?.phone);
                }
                if(billModel.status === 2) {
                    approveOrder += 1;
                }
                if(billModel.status === 3) {
                    cancelOrder += 1
                }
            });

            const result = {
                contacts: totalPhone.length,
                totalRevenue,
                approveOrder,
                cancelOrder
            }
            return CommonFunction.getActionResult(result, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.BILL.getList);
        }
    }
}

export default BillService;
