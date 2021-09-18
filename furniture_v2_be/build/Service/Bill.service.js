"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const BillFactory_1 = require("../Factory/Creator/BillFactory");
class BillService {
    static async AddBillService(req) {
        try {
            const billFactory = BillFactory_1.BillFactory.createBill(req.body, req.headers.type);
            const bill = BillFactory_1.BillFactory.createSchema(billFactory, req.headers.type);
            const result = await bill.save()
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.BILL.create, 200))
                .catch(e => {
                logger_1.default.error(e);
                return function_1.default.getActionResult(define_1.default.RESULT.BILL.create, 500);
            });
            return result;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetListBillService(req) {
        try {
            const type = req.headers.type;
            const bill = await BillFactory_1.BillFactory.getSchema(type).find({ type });
            const billFactory = bill.map(item => BillFactory_1.BillFactory.getBill(item, type));
            return billFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetDetailBillService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const bill = await BillFactory_1.BillFactory.getSchema(type).find({
                type,
                _id: id
            });
            const billFactory = bill.map(item => BillFactory_1.BillFactory.getBill(item, type));
            return billFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = BillService;
