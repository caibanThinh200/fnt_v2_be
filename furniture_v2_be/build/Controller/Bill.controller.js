"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bill_service_1 = __importDefault(require("../Service/Bill.service"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
class BillController {
    static async AddBillController(req, res) {
        try {
            const result = await Bill_service_1.default.AddBillService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.BILL.create, 500)
                }
            });
        }
    }
    static async GetListBillController(req, res) {
        try {
            const result = await Bill_service_1.default.GetListBillService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.BILL.getList, 500)
                }
            });
        }
    }
    static async GetDetailBillController(req, res) {
        try {
            const result = await Bill_service_1.default.GetDetailBillService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.BILL.getDetail, 500)
                }
            });
        }
    }
}
exports.default = BillController;
